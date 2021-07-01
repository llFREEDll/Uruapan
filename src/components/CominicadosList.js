import React from 'react'
import FolderHeader from './FolderHeader'
import ComunicadosCard from '../components/ComunicadosCard'
import CardImg1 from '../assets/comunicado1.jpg'
import CardImg2 from '../assets/comunicado2.jpg'
import CardImg3 from '../assets/comunicado3.jpg'
import { Link } from 'react-router-dom'
import '../styles/ComunicadosCard.css'

const ComunicadosList = ()=>(
    <div className = "my-5">
        <FolderHeader p = "COMUNICADOS"/>
        <div className = "container mt-5">

            <div className = "row row-cols-1 row-cols-md-3 g-4">
            <ComunicadosCard img = {CardImg1} title = "Comunicado 1: sobre los eventos este año" uploadDate = "16-jul-2021"/>
            <ComunicadosCard img = {CardImg2} title = "Nuevos apoyos de la nueva administración "  uploadDate = "20-jul-2021"/>
            <ComunicadosCard img = {CardImg3} title = "Nuevos apoyos de la nueva administración" uploadDate = "28-jul-2021"/>
            </div>
            <div className = "text-center mt-3">
                <Link className = "btn text-white yellowColor btn-sm" to = "/comunicados"> Ver más </Link> 
            </div>
            
        </div>
        
    </div>
)
export default ComunicadosList