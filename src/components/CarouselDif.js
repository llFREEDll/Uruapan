import React from 'react'
import carousel1 from '../assets/Carousel4.jpg'
import carousel2 from '../assets/carousel6.jpg'
import carousel3 from '../assets/carousel7.jpg'
import carousel4 from '../assets/carousel8.jpg'
import $ from "jquery";
import "jquery-ui/ui/effects/effect-slide"

//Un carrusel diseñado para la pantalla de dif-uruapan
//este se puede editar desde el administrador y se pueden agregar
//imagenes de lo que hace en el dif
//diseñado con bootstrap y jquery UI para las animanciones

class  CarouselDif extends React.Component {
    componentDidMount(){

        $('.carousel').effect('slide',500);
        //$('#carouselExampleIndicators').toggle('Drop',500);
    }
    render(){
        return( 
            <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src= {carousel3} className="d-block w-100" alt="..."/>
                    <div className="mt-0 carousel-caption d-md-block">
                        <h1 ><strong>APOYO</strong></h1>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src= {carousel2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h1 ><strong>DESARROLLO</strong></h1>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src=  {carousel1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h1 ><strong></strong></h1>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src=  {carousel4} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h1 ><strong>CRECIMIENTO</strong></h1>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
    
}

export default CarouselDif