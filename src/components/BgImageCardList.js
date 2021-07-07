import React from 'react'
import capasuLogo from '../assets/capasuLogo.png'
import pagoEnLineaLogo from '../assets/online-payment-icon.png'
import difLogo from '../assets/difLogo.png'
import transparenciaLogo from '../assets/transparenciaLogo.jpg'
import implanLogo from '../assets/implanLogo.png'
import BgImageCard from './BgImageCard'
import { Link } from 'react-router-dom'

//Lista de targetas que despliega los links de los servicos externos 
//se muestra en la pantalla principal
const BgImageCardList = () =>(
    <div className = "container">
        <div className="row row-cols-1 row-cols-md-3 my-3 d-flex  align-items-center">
                
            <BgImageCard Link = "https://www.capasu.gob.mx/" img = {capasuLogo}/>
            
            <BgImageCard Link = "https://transparenciauruapan.gob.mx/" img = {transparenciaLogo}/>
            
            <BgImageCard Link = "https://implanuruapan.gob.mx/" img = {implanLogo}/>
            <div className = "col p-4">
                <div className = "card shadow m-2 bg-body rounded d-flex align-items-center">
                    <Link to = "/dif-uruapan" className="card border-0">
                        <img src= {difLogo} className="card-img " alt="..."/>                
                    </Link>
                </div>
            </div>                
            <div className = "col p-4 ">
                <div className = "card shadow m-2 bg-body rounded d-flex align-items-center ">
                    <Link to = "/tramites-en-linea" className="card border-0 text-dark text-decoration-none">
                        
                        <img src= {pagoEnLineaLogo} className="card-img" alt="..."/>                
                        
                    </Link>
                    
                </div>
            </div>
            
        </div>
    </div>
)

export default BgImageCardList