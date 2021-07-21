import React,{useState,useEffect} from 'react'
import FolderHeader from './FolderHeader'
import ComunicadosCard from '../general/ComunicadosCard'
import { Link } from 'react-router-dom'
import '../../styles/ComunicadosCard.css'
import { Spinner } from 'react-bootstrap';
import {urls} from '../../apiConection/Links'
import axios from 'axios'


//Generador de tarjetas que aparece en la ventana de /dif-uruapan
//tambien despliega un boton que lleva a la ventana /comincados
const ComunicadosList = ()=>{

    //recibir los datos de la api
    const [data,setData] = useState([])

    

    useEffect(()=>{
        //Metodo get para obtener los items de la DB
        const GetComunicados = async() =>{
            await axios.get(urls.comunicadosDif)
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
                <FolderHeader p = "COMUNICADOS"/>
                {data.length > 0 ? 
                    <div className = "container mt-5">

                        <div className = "row row-cols-1 row-cols-md-3 g-4">
                            {data.map((item)=>(
                                <ComunicadosCard key= {"comunicado" + item.id} img = {item.imagen} contenido = {item.contenido} title = {item.titulo} uploadDate = {item.fecha}/>
                            ))}
                            
                        </div>
                        <div className = "text-center mt-3">
                            
                            <Link className = "btn text-white yellowColor btn-sm" to = "/comunicados"> Ver más </Link> 
                            
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
export default ComunicadosList