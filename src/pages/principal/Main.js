import React from 'react'
import NavBar from '../../components/general/NavBar'
import Carousel from '../../components/mainPage/Carousel'
import Card from '../../components/general/Card'
import Footer from '../../components/general/Footer'
import BgImageCardList from '../../components/mainPage/BgImageCardList'

import pamarImg from '../../assets/PAMAR.jpg'
import asistenciaSocialImg from '../../assets/asistenciaSocial.jpg'
import serviciosMedicosImg from '../../assets/serviciosMedicos.jpg'
import domingoDeRamosImg from '../../assets/domingoDeRamos.jpg'
import festivalDeVelasImg from '../../assets/festivalDeVelas.jpg'
import lugaresTuristicosImg from '../../assets/lugaresTuristicos.jpg'
import { Link } from 'react-router-dom'
import MainComunicadosList from '../../components/mainPage/MainComunicadosList'



const Main = ()=>(
    <div>
        <NavBar/>
        <Carousel/>
        <div className = "container mt-5">
            <h1 className = "text-center mb-5">DIF Municipal</h1>
            <div className = "row row-cols-1 row-cols-md-3 g-4">
                <div className = "col">
                    <Card img = {pamarImg} title = "Casa PAMAR"
                    p = "Programa de Atención al Menor y Adolescente en Riesgo"></Card>
                </div>
                <div className = "col">
                    <Card img = {asistenciaSocialImg} title = "Asistencia Social"
                    p = "Revisa nuestra lista de programas para la asistencia social"></Card>
                </div>
                <div className = "col">
                    <Card img = {serviciosMedicosImg} title = "Servicios Médicos"
                    p = "CONSULTA MÉDICA GENERALConsulta médica general, suturas, planificación familiar, entre otras"></Card>
                </div>
                <div className = "col w-100 text-center">
                    <Link to= "/dif-uruapan" className="text-decoration-none btnRedColor btn-lg btn-danger">Visitar</Link>
                </div>
            </div>
        </div>  

        <div className = "container mt-5">
            <h1 className = "text-center mb-5">Turismo</h1>
            <div className = "row row-cols-1 row-cols-md-3 g-4">
                <div className = "col">
                    <Card img = {lugaresTuristicosImg} title = "Lugares Turísticos"
                    p = "Echa un vistazo a las mejores atracciones turísticas de Uruapan"></Card>
                </div>
                <div className = "col">
                    <Card img = {domingoDeRamosImg} title = "Tianguis Artesanal"
                    p = "Una celebración llevada a cabo cada año durante semana santa"></Card>
                </div>
                <div className = "col">
                    <Card img = {festivalDeVelasImg} title = "Festival de Velas"
                    p = "Vive la manera tan especial de celebrar a los muertos en nuestra región"></Card>
                </div>
                <div className = "col w-100 text-center">
                    <Link to= "/turismo" className="text-decoration-none btnRedColor btn-lg btn-danger">Visitar</Link>
                </div>
            </div>
        </div>
        <MainComunicadosList/>
        <BgImageCardList/>
       

        <Footer/>
    </div>
        
)
export default Main

// <div className = "p-5 bg-primary text-white ">
// <div className = "container-fluid py-5 text-center">
//     <h1 className = "py-3 display-5 fw-bold">Pagos en línea</h1>
//     <p className="fs-4 py-3">Realiza tus pagos en línea como, pago de servicio de agua (CAPASU), Pago de multas, pago de predial</p>
//     <Link to = "/tramites-en-linea" className="py-3 btn  btn-outline-light btn-lg">Pagar en línea</Link>    
// </div>
// </div>