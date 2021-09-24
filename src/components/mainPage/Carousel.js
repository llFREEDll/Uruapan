import React from 'react'
// import carousel1 from '../../assets/carrusel5.jpg'
// import carousel2 from '../../assets/carousel2.jpg'
// import carousel3 from '../../assets/carousel3.jpg'
import {urls} from '../../apiConection/Links'
import axios from 'axios'   
import Carousel from "react-bootstrap/Carousel"
import { Spinner } from 'react-bootstrap';


//carrusel de imagenes que se despliega en la pantalla principal
//muestra varias imagenes referentes a uruapan
//hecha 100% con bootstrap y una animacion OnMount con jquery UI
class  CarouselMain extends React.Component {
    state = {
        data:[]
    }
    
    componentDidMount(){
        this.GetItems()

    }
    
    //Metodo get para obtener los items de la DB
    async GetItems (){

        await axios.get(urls.carouselMain)
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
                                
                    <Carousel.Item key = {"SlideM" + item.id}>
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
    
    // render(){
    //     return( 
    //         <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    //             <div className="carousel-indicators">
    //                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    //                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //             </div>
    //             <div className="carousel-inner">
    //                 <div className="carousel-item active">
    //                 <img src= {carousel1} className="d-block w-100" alt="..."/>
    //                 <div className="mt-0 carousel-caption d-md-block">
                        
    //                 </div>
    //                 </div>
    //                 <div className="carousel-item">
    //                 <img src= {carousel2} className="d-block w-100" alt="..."/>
    //                 <div className="carousel-caption d-md-block">
    //                     <h1 ><strong>DESARROLLO</strong></h1>
    //                 </div>
    //                 </div>
    //                 <div className="carousel-item">
    //                 <img src=  {carousel3} className="d-block w-100" alt="..."/>
    //                 <div className="carousel-caption d-md-block">
    //                     <h1 ><strong>CRECIMIENTO</strong></h1>
    //                 </div>
    //                 </div>
    //             </div>
    //             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    //                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //                 <span className="visually-hidden">Previous</span>
    //             </button>
    //             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    //                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //                 <span className="visually-hidden">Next</span>
    //             </button>
    //         </div>
    //     )
    // }
    
}

export default CarouselMain