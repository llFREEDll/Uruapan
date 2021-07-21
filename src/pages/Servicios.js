import React from 'react'
import NavBar from '../components/general/NavBar'
import Footer from '../components/general/Footer'
import ServicioImg from '../assets/servicio1.jpg'
import JornadasList from '../components/DIF/JornadasList'
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
                    <h1 className = "text-pink mt-5 text-center ">¿Quiénes Somos?</h1>
                    <br/>
                    <h3 className = "text-yellow  mb-3" >Nuestra misión:</h3>
                    <br/>
                    <p>instrumentar, promover, ejecutar programas y acciones  de excelencia en materia de asistencia social que aseguren la protección integral de la familia </p>
                    <br/>
                    <hr className = "dropdown-divider"/>
                    <br/>
                    <h3 className = "text-yellow  mb-3" >Nuestra Visión: </h3>
                    <br/>
                    <p> ser un sistema municipal Dif renovado que funcione como una institución profesional de excelencia con calidez. Fortalecer los procesos de colaboración y sistemas administrativos ágiles para dar una respuesta oportuna a las necesidades y demandas que en materia de asistencia social presentan los uruapenses.
                    <br/>Asegurar la adecuada ejecución de los programas aistenciales</p>
                    <br/>
                    <hr className = "dropdown-divider"/>
                    <br/>
                    <h3 className = "text-yellow  mb-3" >ÁREA DE  DESARROLLO FAMILIAR Y SOCIAL</h3>
                    <br/>
                    <p>En la Dirección de Desarrollo Familiar y Social, estamos encargados de coordinar y dirigir acciones para promover y difundir el respeto de los derechos humanos de las personas en estado de vulnerabilidad, principalmente familias, niñas, niños, adolescentes y personas mayores.
                    Trabajamos en equipo con los sectores social, privado y público a nivel federal, estatal y municipal, para fomentar la integración social y comunitaria a través de programas de asistencia social y educativa.
                    </p>
                    <br/>
                    <div className = " w-100">
                        <a href = "/servicios" className = "text-white btn Pink-bg"><img alt = " " src = {DownloadIcon} className = "img-fluid"></img> Descargar PDF informativo</a>
                    </div>
                    
                </div>
                <JornadasList/>
                <Footer/>
            </>
        )
    }
}

export default Servicios