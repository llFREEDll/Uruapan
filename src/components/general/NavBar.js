import React from 'react'
import { Link } from 'react-router-dom'
//import logo from '../../assets/logo1.png'
import '../../styles/NavBar.css'
import '../../styles/general.css'

//barra de navegacion de la aplicacion web
//tiene links de acceso a cada una de las pantallas de la aplicacion 
//hecha con bootstrap 
//se despliega en todas las pantallas de la aplicacion

//<Link className="nav-link active  text-Dark" aria-current="page" to="/ventanilla-unica">Ventanilla Única</Link>
//<Link className="nav-link active  text-Dark" aria-current="page" to="/tramites-en-linea">Tramites en línea</Link>
const NavBar = () =>(
    <div>
        <nav className="navbar navbar-expand-lg navbar-light backgroundColor">
            <div className="mx-2 container-fluid " id = "container-fluid">
                <Link className="navbar-brand text-Dark" to="/">
                <img src="https://uruapan.gob.mx/wp-content/uploads/2021/08/logo.png" alt=""  className=" d-inline-block align-text-center"/>
                &emsp;Uruapan
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active  text-Dark" aria-current="page" to="/">Inicio</Link>
                    <Link className="nav-link active  text-Dark" aria-current="page" to="/dif-uruapan">DIF Municipal</Link>
                    <Link className="nav-link active  text-Dark" aria-current="page" to="/turismo">Turismo</Link>
                    <a className="nav-link active  text-Dark" aria-current="page" rel= "noreferrer" target="_blank" href="https://implanuruapan.gob.mx/">IMPLAN</a>
                    <a className="nav-link active  text-Dark" aria-current="page"  rel= "noreferrer" target="_blank" href="https://transparenciauruapan.gob.mx/">Transparencia</a>
  
                    <Link className="nav-link active  text-Dark" aria-current="page" to="/agm">AGM</Link>
                    
                </div>
                </div>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg py-4 navbar-dark color2">

        </nav>
    </div>
    
    
)

export default NavBar