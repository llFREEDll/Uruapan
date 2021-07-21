import React from 'react'
import NavBar from '../components/general/NavBar'
import Footer from '../components/general/Footer'
import AreasYServiciosList from '../components/DIF/AreasYServicios'
import CarouselDif from '../components/DIF/CarouselDif'
import ComunicadosList from '../components/DIF/CominicadosList'
import JornadasList from '../components/DIF/JornadasList'
import AsistenciaSocialList from '../components/DIF/AsistenciaSocialList'
import ServiciosMedicosList from '../components/DIF/ServiciosMedicosList'


class DifUruapan extends React.Component{
    
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div>

                <NavBar/>
                <CarouselDif/>
                <JornadasList/>
                <AreasYServiciosList/>
                <AsistenciaSocialList/>
                <ServiciosMedicosList/>
                <ComunicadosList/>
                <Footer/>

            </div>
        )
    }
}
    

export default DifUruapan
