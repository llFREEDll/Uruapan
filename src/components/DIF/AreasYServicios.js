import React from 'react'
import '../../styles/IconCard.css'
import IconCard from '../general/IconCard'
import aboutIcon from '../../assets/about-icon.png'
import expoIcon from '../../assets/expo-icon.png'
import familyIcon from '../../assets/family-icon.png'
import peopleIcon from '../../assets/people-icon.png'
import loveIcon from '../../assets/love-icon.png'  
import carIcon from '../../assets/car-icon.png'  
import FolderHeader from './FolderHeader'

//componente que genera la lista de servcios que proporciona
//la sub division casa PAMAR
//mestra los diferentes servicios con una tarjeta con icono
//al igual que servicios medicos y asistencia social 
//se despliega en /dif-uruapan

const AreasYServiciosList = () =>(
    <div className = " mt-5">
        
        <FolderHeader p = "AREAS Y SERVICIOS"/>
        
        <div className = "container mt-5">
            
            <div className = "row row-cols-2 row-cols-md-3 g-4">
                    
                <IconCard img = {aboutIcon} pClass = " greenColor" p ="¿Quiénes Somos?"/>
                
                <IconCard img = {loveIcon} pClass = " pinkColor "  p ="Salud "/>
                
                <IconCard img = {peopleIcon} pClass = " greenColor" p ="CEFETI"/>
                
                <IconCard img = {familyIcon} pClass = " YellowColor small-txt" p ="Asistencia Social"/>
                
                <IconCard img = {expoIcon} pClass = " pinkColor small-txt" p ="Educación"/>
                
                <IconCard img = {familyIcon} pClass = "YellowColor small-txt"  p ="Adulto Mayor INAPAM"/>
                
                <IconCard img = {loveIcon} pClass = " pinkColor small-txt" p ="Alimentación"/>
                
                <IconCard img = {carIcon} pClass = " YellowColor small-txt" p ="Desarrollo Comunitario"/>
                
                <IconCard img = {familyIcon} pClass = " greenColor small-txt" p ="PAMAR"/>
                
                <IconCard img = {peopleIcon} pClass = "YellowColor small-txt" p ="CEDECOS"/>

                <IconCard img = {carIcon} pClass = "YellowColor small-txt" p ="Habitad"/>

                <IconCard img = {expoIcon} pClass = "YellowColor small-txt" p ="Juridico"/>

            </div>
        </div>
        
    </div>
    
)

export default AreasYServiciosList