import React from 'react'
import {urls} from '../../apiConection/Links'
import $ from "jquery";
import axios from 'axios'   
import "jquery-ui/ui/effects/effect-slide"
import Carousel from "react-bootstrap/Carousel"
import { Spinner } from 'react-bootstrap';

//Un carrusel diseñado para la pantalla de dif-uruapan
//este se puede editar desde el administrador y se pueden agregar
//imagenes de lo que hace en el dif
//diseñado con bootstrap y jquery UI para las animanciones

class  CarouselDif extends React.Component {
    state = {
        data:[]
    }
    
    componentDidMount(){
        this.GetItems()
        $('.carousel').effect('slide',500);

    }
    
    //Metodo get para obtener los items de la DB
    async GetItems (){

        await axios.get(urls.carouselDif)
        .then(response =>{
            this.setState( {data: response.data})

        }).catch(error=>{
            console.log(error);
          })

    }

    render(){
        if(this.state.data.length > 0)
        return( 
            <Carousel>
                {this.state.data.map((item) =>(
                                
                    <Carousel.Item key = {"Slide " + item.id}>
                        <img
                            className="d-block w-100"
                            src = {item.imagen}
                            alt="..."
                        />
                        <Carousel.Caption>
                            
                            <h1><strong>{item.titulo}</strong></h1>

                        </Carousel.Caption>
                    </Carousel.Item>
                                
                ))}
                
            </Carousel>
            
        )
        else 
        return (
            <div className = "text-center mt-4">
                <Spinner animation="grow" variant="success" />
            </div>
            
        )
    }
    
}

export default CarouselDif

// <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel">
                
//                 <div className="carousel-indicators">
//                 {this.state.data.map((item) =>(
                                
//                     <button key = {"Slide " + item.id} type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to={item.id} className="" aria-current="true" aria-label={"Slide " + item.id}></button>

//                     ))}                    
//                 </div>
//                 <div className="carousel-inner">
//                 {this.state.data.map((item) =>
//                         (
                            
//                             <div className="carousel-item active" key = {"carouselImg " + this.props.item.id}>
//                                 <img src= {this.props.item.imagen} className="d-block w-100" alt="..."/>
//                                 <div className="mt-0 carousel-caption d-md-block">
//                                     <h1 ><strong>{this.props.item.titulo}</strong></h1>
//                                 </div>
//                             </div>
//                         )
                    
//                     )}                    
    
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>