import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import IconCardList from '../components/IconCardList'
import Carousel from '../components/Carousel'
import ComunicadosList from '../components/CominicadosList'
import JornadasList from '../components/JornadasList'

class DifUruapan extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div>

                <NavBar/>
                <Carousel/>
                <JornadasList/>
                <ComunicadosList/>
                <IconCardList/>
                <Footer/>

            </div>
        )
    }
}
    

export default DifUruapan
