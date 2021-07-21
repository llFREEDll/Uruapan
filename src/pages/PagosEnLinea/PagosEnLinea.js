import React from 'react'
import NavBar from '../../components/general/NavBar'
import Footer from '../../components/general/Footer'
import CardLogoDownLine from '../../components/general/CardLogoDownLine';
import CardLogoDownLine2 from '../../components/general/CardLogoDownLine2';
import waterLogo from '../../assets/water-icon.png'
import predialLogo from '../../assets/predial-icon.png'
import multasLogo from '../../assets/multas-icon.png'
import '../../styles/IconCard.css'

class PagosEnLinea extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div> 
                <NavBar/>
                <div className = "container my-5">
                    <div className = "row row-cols-1 row-cols-md-2 g-4">
                        <CardLogoDownLine Link = "/capasu" img = {waterLogo} p  = "¿No quieres hacer fila en  CAPASU? Paga en línea tu servicio de agua "/>
                        <CardLogoDownLine Link = "/multas" img = {multasLogo} p  = "Paga tus multas impuestas por tránsito al momento"/>
                        <CardLogoDownLine2 Link = "https://www.egbs2.com.mx/emunicipio/portal/login.do?id=306" img = {predialLogo} p  = "Realiza el pago de predial desde la comodidad de tu casa"/>
                    </div>
                </div>
                
                <Footer/>
            </div>
        )
    }

}

export default PagosEnLinea