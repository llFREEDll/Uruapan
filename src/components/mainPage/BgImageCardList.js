import React from 'react'
import capasuLogo from '../../assets/capasuLogo.png'
import transparenciaLogo from '../../assets/transparenciaLogo.jpg'
import implanLogo from '../../assets/implanLogo.png'
import BgImageCard from '../general/BgImageCard'

//Lista de targetas que despliega los links de los servicos externos 
//se muestra en la pantalla principal
const BgImageCardList = () =>(
    <div className = "container">
        <div className="row row-cols-1 row-cols-md-3 my-3 d-flex  align-items-center">
                
            <BgImageCard Link = "https://www.capasu.gob.mx/" img = {capasuLogo}/>
            
            <BgImageCard Link = "https://transparenciauruapan.gob.mx/" img = {transparenciaLogo}/>
            
            <BgImageCard Link = "https://implanuruapan.gob.mx/" img = {implanLogo}/>
            
        </div>
    </div>
)

export default BgImageCardList