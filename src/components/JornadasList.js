import React from 'react'

import FolderHeader from './FolderHeader'
import JornadaCard from './JornadaCard'
import jornadaImg1 from '../assets/jornada1.jpg'
import jornadaImg2 from '../assets/jornada2.jpg'
import jornadaImg3 from '../assets/jornada3.jpg'
import jornadaImg4 from '../assets/jornada2.jpg'
import jornadaImg5 from '../assets/jornada5.jpg'
import jornadaImg6 from '../assets/jornada6.jpg'
import jornadaImg7 from '../assets/jornada1.jpg'
import jornadaImg8 from '../assets/jornada8.jpg'
import jornadaImg9 from '../assets/jornada2.jpg'

//Lista de las jornadas activas
//se muestra en /dif-uruapan
//despliega un carrusel el cual muestra las jornadas de 3 en 3 por 
//pantalla en el carrusel

const JornadasList = () =>(
    <div className = "mt-5"> 
        <FolderHeader p = "JORNADAS"/>
        <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
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
        
    </div>
)

export default JornadasList