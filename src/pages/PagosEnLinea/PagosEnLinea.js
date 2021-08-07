import React from 'react'
import NavBar from '../../components/general/NavBar'
import Footer from '../../components/general/Footer'
import CardLogoDownLine from '../../components/general/CardLogoDownLine';
import CardLogoDownLine2 from '../../components/general/CardLogoDownLine2';
import waterLogo from '../../assets/water-icon.png'
import predialLogo from '../../assets/predial-icon.png'
import multasLogo from '../../assets/multas-icon.png'
import reselloLogo from '../../assets/resello-icon.png'
import licenciaComerLogo from '../../assets/licenciaComer-icon.png'
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
                        <CardLogoDownLine Link = "/pago-agua" img = {waterLogo} p  = "¿No quieres hacer fila en  CAPASU? Paga en línea tu servicio de agua "/>
                        <CardLogoDownLine Link = "/pago-multas" img = {multasLogo} p  = "Paga tus multas impuestas por tránsito al momento"/>
                    
                        <CardLogoDownLine2 Link = "https://www.egbs2.com.mx/emunicipio/portal/login.do?id=306" img = {predialLogo} p  = "Realiza el pago de predial desde la comodidad de tu casa"/>
                        <CardLogoDownLine2 Link = "http://tramites.uruapan.gob.mx/index.php/user/login" img = {reselloLogo} p  = "Resella de tu licencia comercial"/>

                        <CardLogoDownLine Link = "/licencia-comercial" img = {licenciaComerLogo} p  = "Tramita en linea tu licencia comercial"/>    
                    </div>
                </div>
                
                <Footer/>
            </div>
        )
    }

}

export default PagosEnLinea