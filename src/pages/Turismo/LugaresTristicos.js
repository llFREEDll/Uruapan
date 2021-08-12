import React from 'react'
import Footer from '../../components/general/Footer'
import NavBar from '../../components/general/NavBar'
import Parqueimg from '../../assets/lugaresTuristicos.jpg'
import Centroimg from '../../assets/centroLT.jpg'
import Volcanimg from '../../assets/paricutin.jpg'
import CardAndModal from '../../components/general/CardAndModal'
import { Col, Row } from 'react-bootstrap'
const LugaresTuristicos = () =>{

    return(
        <>
            <NavBar/>
            <div className = "text-center container ">
                <h1 className = "my-5">LUGARES TURÍSCOS</h1>
                <Row xs={1} md={3}>
                    <Col>
                    <div className = "my-5">
                        <CardAndModal img = {Parqueimg} title = "Parque Nacional Barranca del Cupatitzio"
                        p2 = "En el parque se han registrado 495 especies de plantas nativas y 213 especies de vertebrados terrestres. Es uno de los principales centros recreativos del estado de Michoacán. En este espacio se generan importantes servicios ambientales, entre ellos, protección de la diversidad biológica, captación de agua de lluvia, regulación del clima, captura de carbono y producción de oxígeno.La captación de lluvia es una de las funciones más importantes del parque, pues allí se recargan los mantos acuíferos que dan origen al río Cupatitzio, el cual abastece de agua potable a la ciudad de Uruapan y genera energía eléctrica para regar campos de cultivo."
                        p= "Una reserva natural ideal para hacer turismo"
                        link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5637.7204821831365!2d-102.07253076469776!3d19.424196091693332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842de20a204492b9%3A0x4af65ce515075434!2sParque%20Nacional%20Barranca%20del%20Cupatitzio!5e0!3m2!1ses-419!2smx!4v1628794749143!5m2!1ses-419!2smx"/>
                    </div>
                    </Col>
                    <Col>
                    <div className = "my-5">
                        <CardAndModal img = {Centroimg} title = "Centro Histórico de Uruapan​"
                        p2 = "Uruapan proviene de la palabra tarasca «uruapani» y significa «el florecer y fructificar de una planta al mismo tiempo», por lo que se ha traducido como «lugar donde los árboles tienen siempre fruto». La ciudad se funda en el año de 1533 por Fray Juan de San Miguel y el primer Obispo de Michoacán Don Vasco de Quiroga, la cual se dividió en 9 barrios, con el fin de evangelizar a los indígenas: La Magdalena, San Pedro, San Francisco, San Juan Bautista, San Juan Evangelista, San Miguel, Santo Santiago, La Santísima Trinidad (el vergel) y Los tres Reyes."
                        p= "Un lugar ideal para pasar el día con la familia"                        
                        link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7525.637287148524!2d-102.06788237763939!3d19.42024031601581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842de2722b32cb05%3A0x635d3a6a5afed75f!2sCentro%2C%20Uruapan%2C%20Mich.!5e0!3m2!1ses-419!2smx!4v1628795828783!5m2!1ses-419!2smx"/>
                    </div>
                    </Col>
                    <Col>
                    <div className = "my-5">
                        <CardAndModal img = {Volcanimg} title = "Volcán Paricutín​"
                        p2 = "El 20 de febrero de 1943, Manuel Pulido, un agricultor, se encontraba trabajando la tierra en las cercanías del pueblo Paricutín, cuando de pronto ésta empezó a temblar, se abrió la tierra y empezó a emanar un vapor muy espeso, a sonar muy fuerte y a volar piedras. Muy asustado, el señor Pulido avisó al pueblo."
                        p= "No pierdas la oportunidad de visitar esta estructura geológica"                        
                        link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5635.354467416118!2d-102.25191738793609!3d19.492270825600144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842e0d6373ebbf41%3A0x7dc09907f801aca1!2zVm9sY8OhbiBQYXJpY3V0w61u!5e0!3m2!1ses-419!2smx!4v1628796370324!5m2!1ses-419!2smx"/>
                    </div>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </>
    )
}

export default LugaresTuristicos