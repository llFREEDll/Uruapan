import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.png'
import '../styles/NavBar.css'
import '../styles/general.css'

// <div className="nav-item dropdown text-decoration-none">
                //     <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                //         DIF Municipal
                //     </a>
                //     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                //         <li><Link className="dropdown-item" to="/casa-pamar">Casa PAMAR</Link></li>
                //         <li><Link className="dropdown-item" to="/asistencia-social">Asistencia Social</Link></li>
                //         <li><Link className="dropdown-item" to="/servcios-medicos">Servicios Médicos</Link></li>
                //     </ul>
                // </div>
                // <div className="nav-item dropdown text-decoration-none">
                //     <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                //         Turismo
                //     </a>
                //     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                //         <li><Link className="dropdown-item" to="/lugares-turisticos">Lugares Turísticos</Link></li>
                //         <li><Link className="dropdown-item" to="/tianguis-artesanal">Tianguis Artesanal <br/>Domingo de Ramos</Link></li>
                //         <li><Link className="dropdown-item" to="/festival-de-velas">Festival de Velas </Link></li>
                //     </ul>
                // </div> 

const NavBar = () =>(
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark backgroundColor">
            <div className="mx-2 container-fluid " id = "container-fluid">
                <Link className="navbar-brand text-white" to="/">
                <img src={logo} alt=""  className=" d-inline-block align-text-center"/>
                &emsp;Uruapan
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link text-white" aria-current="page" to="/">Inicio</Link>
                    <Link className="nav-link text-white" aria-current="page" to="/dif-uruapan">DIF Municipal</Link>
                    <Link className="nav-link text-white" aria-current="page" to="/turismo">Turismo</Link>
                    <Link className="nav-link text-white" aria-current="page" to="/implan">IMPLAN</Link>
                    <Link className="nav-link text-white" aria-current="page" to="/transparencia">Transparencia</Link>
                    <Link className="nav-link text-white" aria-current="page" to="/tramites-en-linea">Tramites en linea</Link>
                    <Link className="nav-link text-white" aria-current="page" to="/agm">AGM</Link>
                </div>
                </div>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg py-4 navbar-dark color2">

        </nav>
    </div>
    
    
)

export default NavBar