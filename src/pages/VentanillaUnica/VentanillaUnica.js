import React from 'react'
import {Row} from 'react-bootstrap';
import CardImageTop from '../../components/general/CardImageTop';
import Footer from '../../components/general/Footer';
import NavBar from '../../components/general/NavBar';
import CapasuLogo from '../../assets/capasuLogo.png'
import DifLogo from "../../assets/difLogo.png"
import TesoreriaLogo from "../../assets/tesoreria.png"

class VentanillaUnica extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <div>
                <NavBar/>
                <div className = "container my-5 text-center">
                    <h1> Venanilla Únuica</h1>
                    <p className = "mb-5"> Pide una cita para realizar un trámite sin importar la dependencia donde te encuentres.
                    <br/>Ve los horarios disponibles y escoge el que se adapte a ti.
                    <br/>Nuestros funcionarios están para atenderte. </p>
                    <Row xs={1} md={2}>
                        <CardImageTop img = {CapasuLogo} p = "Pide una cita para realizar tramites en CAPASU" Link = "http://uruapanendesarrollo-com.stackstaging.com/ventanilla-unica/calendario-capasu/"/>
                        <CardImageTop img = {DifLogo} p = "Pide una cita para realizar tramites en el DIF" Link = "http://uruapanendesarrollo-com.stackstaging.com/ventanilla-unica/calendario-dif/"/>
                        <CardImageTop img = {TesoreriaLogo} p = "Pide una cita para realizar tramites en tesoreria municiapal" Link = "http://uruapanendesarrollo-com.stackstaging.com/ventanilla-unica/calendario-tesoreria/"/>
                    </Row>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default VentanillaUnica