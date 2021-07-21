
import React,{useState} from 'react'

import AdminJornadas from '../components/DIF/AdminJornadas'
import AdminCarouselDif from '../components/DIF/AdminCarouselDif'
import AdminComunicados from '../components/DIF/AdminComunicados'
import axios from 'axios'
import {urls} from '../apiConection/Links'
import '../styles/Admin.css'
import md5 from 'md5'
import logo from '../assets/logo1.png'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

//en esta vista se despliegan las opciones de administrador
// ver, editar, crear, eliminar los componentes de la
// aplicacion
const Admin = () => {

    //manejador para saber si esta logueado o no
    const [isLogin,setIsLogin] = useState(false)

    //manejador que muestra error al escribir el usuario o la contrasena incorrecta
    //si esta activo despliega una alerta marcando el error
    const [loginError,setLoginError] = useState(false)
    
    //manejador para recibir los datos de la api
    const [data,setData] = useState([])

    //manejador para almacenar los datos del usuario
    const [userData,setUserData] = useState({
        id:0,
        user : "",
        password: ""
    })
    

    //enviar los datos ingresados por el usuario a la api
    const PostLogin = async() =>{
        var form = new FormData();
        form.append("user", userData.user );
        form.append("password",md5(userData.password) );
        form.append("METHOD","POST");
        await axios.post(urls.login,form)
        .then(response =>{
            if(response.data === "Login error"){
                setIsLogin(false);
                setData({
                    id:0,
                    user : "",
                    password: ""
                })
                setLoginError(true)
            }
            else{
                setIsLogin(true);
                setData(response.data)
                setLoginError(false)
            }
        }).catch(error=>{
            console.log(error);
          })
    }

    //leer los datos del usuario y alamcenarlos en su variable
    const HandleChange = e =>{
        const {name,value} = e.target
        setUserData((prevState)=>({
            ...prevState,
            [name]:value
        }))
        //console.log(comunicadoSeleccionado)
    }

    return (
        <>  
            <div className="navbar navbar-expand-lg navbar-dark backgroundColor">
                <div className="mx-2 container-fluid " id = "container-fluid">
                    <Link className="navbar-brand text-white" to="/">
                    <img src={logo} alt=""  className=" d-inline-block align-text-center"/>
                    &emsp;Uruapan
                    </Link>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg py-4 navbar-dark color2">
                <div className = "text-white">{isLogin?<p>Hola {data.user}</p>:<p>Por favor inicia sesión</p>  }</div>
            </nav>
            {isLogin?
            <>
                <AdminCarouselDif/>
                <AdminJornadas/>
                <AdminComunicados/>
            </>
            :
            <div className ="container ">
                <div className = "m-50p w-75 shadow-lg p-3 mb-5 bg-body rounded">
                    <p className = "mb-3 fs-5">Administrador</p>
                    {loginError? 
                    <Alert variant = "danger" className = "text-center">
                        Error: Usuario o contraseña incorrectos
                    </Alert>: <></>}
                    <div className= "mb-3">
                        <label htmlFor="user" className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="user" name = "user" onChange  = {HandleChange}/>
                    </div>
                    <div className= "mb-5">
                        <label htmlFor="user" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" name = "password" onChange  = {HandleChange}/>
                    </div>
                    <button className = "w-100 btn btn-primary" onClick = {()=>PostLogin()}>Iniciar Sesión</button>
                </div>
            </div>
            }
            
            
        </>
    )
}

export default Admin