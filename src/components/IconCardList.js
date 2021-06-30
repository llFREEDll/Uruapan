import React from 'react'
import '../styles/IconCard.css'
import IconCard from './IconCard'
import settingsIcon from '../assets/settingsIcon.png'
import infoIcon from '../assets/infoIcon.png'

const IconCardList = () =>(
    <div className = "container my-5">
        
        <div className = "row row-cols-1 row-cols-md-3 g-4">
                
                <IconCard img = {settingsIcon} pClass = " pinkColor" p ="PROGRAMA DE PROMOCIÓN Y DIFUSIÓN DE LOS DERECHOS DE LA INFANCIA"/>
            
                <IconCard img = {infoIcon} pClass = "purpleColor" p ="PROGRAMA DE ATENCIÓN Y PREVENCIÓN DEL TRABAJO INFANTIL"/>
            
                <IconCard img = {settingsIcon} pClass = " pinkColor" p ="ATENCIÓN PSICOLÓGICA"/>
            
                <IconCard img = {infoIcon} pClass = " purpleColor" p ="PROGRAMA DE PREVENCIÓN RIESGOS PSICOSOCIALES EMBARAZO ADOLESCENTE"/>
            
                <IconCard img = {settingsIcon} pClass = " pinkColor" p ="PROGRAMA DE PREVENCIÓN DE RIESGOS PSICOSOCIALES PRENATAL Y POSNATAL"/>
            
                <IconCard img = {infoIcon} pClass = " purpleColor" p ="PROGRAMA DE PREVENCIÓN DE RIESGOS PSICOSOCIALES ADICCIONES"/>
            
                <IconCard img = {settingsIcon} pClass = " pinkColor" p ="PROGRAMA DE PREVENCIÓN CONTRA LA EXPLOTACIÓN SEXUAL INFANTIL"/>
            
                <IconCard img = {infoIcon} pClass = " purpleColor" p ="PROGRAMA DESARROLLO DE HABILIDADES DEL BUEN TRATO EN LA FAMILIA"/>
            
                <IconCard img = {settingsIcon} pClass = " pinkColor" p ="TALLERES DE FUTBOL Y BASQUETBOL"/>
            
                <IconCard img = {infoIcon} pClass = "purpleColor" p ="TALLERES DE PINTURA Y MANUALIDADES"/>
            
        </div>
        
        
    </div>
    
)

export default IconCardList