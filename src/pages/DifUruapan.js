import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import IconCardList from '../components/IconCardList'
import CarouselDif from '../components/CarouselDif'
import ComunicadosList from '../components/CominicadosList'
import JornadasList from '../components/JornadasList'
import AsistenciaSocialList from '../components/AsistenciaSocialList'
import ServiciosMedicosList from '../components/ServiciosMedicosList'

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
                <IconCardList/>
                <AsistenciaSocialList/>
                <ServiciosMedicosList/>
                <ComunicadosList/>
                <Footer/>

            </div>
        )
    }
}
    

export default DifUruapan
