import React from 'react'
import IconCard from '../general/IconCard'
import FolderHeader from './FolderHeader'

import settingsIcon from '../../assets/settingsIcon.png'
import serviceIcon from '../../assets/serviceIcon.png'
import infoIcon from '../../assets/infoIcon.png'


// Componente que despliega La lista de los servicios referentes a asistencia social
//se despliega en la pantall /dif-uruapan 
const AsistenciaSocialList = () =>(
    <div className = " mt-5">
        
        <FolderHeader p = "ASISTENCIA SOCIAL"/>
        
        <div className = "container mt-5">
            
            <div className = "row row-cols-2 row-cols-md-3 g-4">
                    
                <IconCard img = {settingsIcon} pClass = " greenColor" p ="PROGRAMA DE PAÑALES MADRES SOLTERAS"/>
                
                <IconCard img = {serviceIcon} pClass = " pinkColor "  p ="PROGRAMA DE PAÑALES PACIENTES DISCAPACITADOS Y ADULTOS MAYORES"/>
                
                <IconCard img = {settingsIcon} pClass = " greenColor" p ="PROGRAMA DE PASAJE"/>
                
                <IconCard img = {infoIcon} pClass = " YellowColor small-txt" p ="PROGRAMA DE CONTINGENCIAS Y SINIESTROS PARA VIVIENDA"/>
                
                <IconCard img = {serviceIcon} pClass = " pinkColor small-txt" p ="PROGRAMA DE APARATOS ORTOPEDICOS, SILLAS DE RUEDAS, BASTONES Y ANDADERAS"/>
                
                <IconCard img = {infoIcon} pClass = "YellowColor small-txt"  p ="PROGRAMA DE APOYOS FUNERARIOS"/>
                
                <IconCard img = {serviceIcon} pClass = " pinkColor small-txt" p ="PROGRAMA DE LAMINA Y MADERA"/>
                
                <IconCard img = {infoIcon} pClass = " YellowColor small-txt" p ="PROGRAMA DE FORTALECIMIENTO A INSTITUCIONES ASISTENCIALES"/>
                

            </div>
        </div>
        
    </div>
)

export default AsistenciaSocialList