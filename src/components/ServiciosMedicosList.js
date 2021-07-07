import React from 'react'
import IconCard from './IconCard'
import FolderHeader from './FolderHeader'

import settingsIcon from '../assets/settingsIcon.png'
import serviceIcon from '../assets/serviceIcon.png'
import infoIcon from '../assets/infoIcon.png'

//lista de los servicios medicos que estan disponibles
//se despliega en /dif-uruapan
//contiene una cabecera tipo folder
//y la lista de los servicios

const ServiciosMedicosList = () =>(
    <div className = " mt-5">
        
        <FolderHeader p = "SERVICIOS MÉDICOS"/>
        
        <div className = "container mt-5">
            
            <div className = "row row-cols-2 row-cols-md-3 g-4">
                    
                <IconCard img = {settingsIcon} pClass = " greenColor" p ="CONSULTA MÉDICA GENERAL"/>
                
                <IconCard img = {serviceIcon} pClass = " pinkColor "  p ="CURACIÓN MÉDICA"/>
                
                <IconCard img = {settingsIcon} pClass = " greenColor" p ="SUTÚRAS"/>
                
                <IconCard img = {infoIcon} pClass = " YellowColor small-txt" p ="CERTIFICADOS MÉDICOS Y/O INCAPACIDADES"/>
                
                <IconCard img = {serviceIcon} pClass = " pinkColor small-txt" p ="PLANIFICACIÓN FAMILIAR"/>
                
                <IconCard img = {infoIcon} pClass = "YellowColor small-txt"  p ="CONSULTA DENTAL GENERAL"/>

            </div>
        </div>
        
    </div>
)
export default ServiciosMedicosList