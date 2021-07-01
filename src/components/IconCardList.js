import React from 'react'
import '../styles/IconCard.css'
import IconCard from './IconCard'
import settingsIcon from '../assets/settingsIcon.png'
import serviceIcon from '../assets/serviceIcon.png'
import infoIcon from '../assets/infoIcon.png'
import FolderHeader from './FolderHeader'


const IconCardList = () =>(
    <div className = " mt-5">
        
        <FolderHeader p = "CASA PAMAR"/>
        
        <div className = "container mt-5">
            
            <div className = "row row-cols-2 row-cols-md-3 g-4">
                    
                <IconCard img = {settingsIcon} pClass = " greenColor" p ="PROGRAMA DE PROMOCIÓN"/>
                
                <IconCard img = {serviceIcon} pClass = " pinkColor "  p ="PROGRAMA DE ATENCIÓN "/>
                
                <IconCard img = {settingsIcon} pClass = " greenColor" p ="ATENCIÓN PSICOLÓGICA"/>
                
                <IconCard img = {infoIcon} pClass = " YellowColor small-txt" p ="PROGRAMA DE PREVENCIÓN RIESGOS PSICOSOCIALES EMBARAZO ADOLESCENTE"/>
                
                <IconCard img = {serviceIcon} pClass = " pinkColor small-txt" p ="PROGRAMA DE PREVENCIÓN DE RIESGOS PSICOSOCIALES PRENATAL Y POSNATAL"/>
                
                <IconCard img = {infoIcon} pClass = "YellowColor small-txt"  p ="PROGRAMA DE PREVENCIÓN DE RIESGOS PSICOSOCIALES ADICCIONES"/>
                
                <IconCard img = {serviceIcon} pClass = " pinkColor small-txt" p ="PROGRAMA DE PREVENCIÓN CONTRA LA EXPLOTACIÓN SEXUAL INFANTIL"/>
                
                <IconCard img = {infoIcon} pClass = " YellowColor small-txt" p ="PROGRAMA DESARROLLO DE HABILIDADES DEL BUEN TRATO EN LA FAMILIA"/>
                
                <IconCard img = {settingsIcon} pClass = " greenColor small-txt" p ="TALLERES DE FUTBOL Y BASQUETBOL"/>
                
                <IconCard img = {infoIcon} pClass = "YellowColor small-txt" p ="TALLERES DE PINTURA Y MANUALIDADES"/>

            </div>
        </div>
        
    </div>
    
)

export default IconCardList