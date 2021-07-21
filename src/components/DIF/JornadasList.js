import React,{useState,useEffect} from 'react'
import {urls} from '../../apiConection/Links'
import axios from 'axios'
import Carousel from "react-bootstrap/Carousel"
import {  Spinner } from 'react-bootstrap';

import FolderHeader from './FolderHeader'
import JornadaCard from '../general/JornadaCard'
//Lista de las jornadas activas
//se muestra en /dif-uruapan
//despliega un carrusel el cual muestra las jornadas de 3 en 3 por 
//pantalla en el carrusel

const JornadasList = () =>{

    //recibir los datos de la api
    const [data,setData] = useState([])

    useEffect(()=>{
        //Metodo get para obtener los items de la DB
        const GetJornadas = async() =>{
            await axios.get(urls.jornadasDif)
            .then(response =>{
                setData( response.data)
//                FormatData();

            }).catch(error=>{
                console.log(error);
            })
            
        }
        GetJornadas();        
    },[])

    return(
        <div className = "mt-5"> 
            <FolderHeader p = "JORNADAS"/>
            {data.length > 0 ?
            
            <Carousel>
                {data.map((item) =>{
                    
                    return(
                                
                    <Carousel.Item key = {"jornadaSlide " + item.id}>
                         
                         <div className = " container">
                            <div className = "row  row-cols-1 row-cols-md-3 ">
                                
                                    <JornadaCard img = {item.imagen1.imagen}/>
                                    <JornadaCard img = {item.imagen2.imagen}/>  
                                    <JornadaCard img = {item.imagen3.imagen}/>

                                
                                
                            </div>
                        </div>        
                    </Carousel.Item>
                    
                                            
                )})}
            </Carousel>
            :
            <div className = "text-center mt-4">
                <Spinner animation="grow" variant="success" />
            </div>}
        </div>
    )
}


export default JornadasList

/* <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className = "container">
                            <div className = "row  row-cols-1 row-cols-md-3 ">
                                <JornadaCard index= "1" img = {jornadaImg1}/>
                                <JornadaCard index= "2" img = {jornadaImg2}/>
                                <JornadaCard index= "3" img = {jornadaImg3}/>
                                
                            </div>
                        </div>        
                    </div>
                    <div className="carousel-item">
                        <div className = "container">
                            <div className = "row  row-cols-1 row-cols-md-3 ">
                                
                                <JornadaCard index= "4" img = {jornadaImg5}/>
                                <JornadaCard index= "5" img = {jornadaImg4}/>
                                <JornadaCard index= "6" img = {jornadaImg6}/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className = "container">
                            <div className = "row  row-cols-1 row-cols-md-3 ">
                                
                                <JornadaCard index = "7" img = {jornadaImg8}/>
                                <JornadaCard index = "8" img = {jornadaImg9}/>
                                <JornadaCard index = "9" img = {jornadaImg7}/>
                                
                            </div>
                        </div>
                    
                    </div>
                </div>
    
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className ="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
    
            </div>
             */