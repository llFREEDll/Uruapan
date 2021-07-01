import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ServicioImg from '../assets/servicio1.jpg'
import JornadasList from '../components/JornadasList'
import DownloadIcon from '../assets/downloadIcon.png'
import '../styles/Servicios.css'

class Servicios extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <>
                <NavBar/>
                <div>
                    <img src={ServicioImg} className="img-fluid" alt="..."/>
                </div>    
                <div className = "container text-jfy">
                    <h1 className = "mt-5 text-center">Ejemplo de servicio </h1>
                    <h1 className = "text-yellow text-center mb-3" >disponible</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <div className = " w-100 text-center">
                        <a href = "#" className = "text-white btn Pink-bg"><img alt = " " src = {DownloadIcon} className = "img-fluid"></img> Descargar PDF informativo</a>
                    </div>
                    
                </div>
                <JornadasList/>
                <Footer/>
            </>
        )
    }
}

export default Servicios