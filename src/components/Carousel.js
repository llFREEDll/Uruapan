import React from 'react'
import carousel1 from '../assets/carrusel5.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
import $ from "jquery";
import "jquery-ui/ui/effects/effect-slide"

//carrusel de imagenes que se despliega en la pantalla principal
//muestra varias imagenes referentes a uruapan
//hecha 100% con bootstrap y una animacion OnMount con jquery UI
class  Carousel extends React.Component {
    componentDidMount(){

        $('.carousel').effect('slide',500);
        //$('#carouselExampleIndicators').toggle('Drop',500);
    }
    render(){
        return( 
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src= {carousel1} className="d-block w-100" alt="..."/>
                    <div className="mt-0 carousel-caption d-md-block">
                        
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src= {carousel2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h1 ><strong>DESARROLLO</strong></h1>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src=  {carousel3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h1 ><strong>CRECIMIENTO</strong></h1>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
    
}

export default Carousel