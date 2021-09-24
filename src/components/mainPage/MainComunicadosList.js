import React,{useState,useEffect} from 'react'
import ComunicadosCard from '../general/ComunicadosCard'
import { Link } from 'react-router-dom'
import '../../styles/ComunicadosCard.css'
import { Spinner } from 'react-bootstrap';
import {urls} from '../../apiConection/Links'
import axios from 'axios'


//Generador de tarjetas que aparece en la ventana de /dif-uruapan
//tambien despliega un boton que lleva a la ventana /comincados
const MainComunicadosList = ()=>{

    //recibir los datos de la api
    const [data,setData] = useState([])

    

    useEffect(()=>{
        //Metodo get para obtener los items de la DB
        const GetComunicados = async() =>{
            await axios.get(urls.comunicadosMain)
            .then(response =>{
                setData( response.data)

            }).catch(error=>{
                console.log(error);
            })
        }
        GetComunicados();
    },[])

        return(
            
            <div className = "my-5">
                <h1 className = "text-center mb-5">Comunicados</h1>
                {data.length > 0 ? 
                    <div className = "container mt-5">

                        <div className = "row row-cols-1 row-cols-md-3 g-4">
                            {data.map((item)=>(
                                <ComunicadosCard key= {"comunicado" + item.id} img = {item.imagen} contenido = {item.contenido} title = {item.titulo} uploadDate = {item.fecha}/>
                            ))}
                            
                        </div>
                        <div className = "text-center mt-3">
                            
                            <Link className = "btn text-white btnRedColor" to = "/comunicados"> Ver más </Link> 
                            
                        </div>
                        
                    </div>
                :
                    <div className = "text-center mt-4">
                        <Spinner animation="grow" variant="success" />
                    </div>
                }        
            </div>
        )
    
}
export default MainComunicadosList