import React from 'react';
import Footer from '../../components/general/Footer';
import NavBar from '../../components/general/NavBar';
import turismoIcon1 from '../../assets/turismo-1.png';
import turismoIcon2 from '../../assets/turismo-2.png';
import turismoIcon3 from '../../assets/turismo-3.png';
import { Col, Row } from 'react-bootstrap';
import IconShadowCard from '../../components/turismo/IconShadowCard';
import '../../styles/Turismo.css'
const Turismo = () =>{
return (
    <div>
        <NavBar/>
        <div className = "container my-5 text-center">
            <h1>Lugares turísticos Uruapan</h1>
            <p className = "mb-5">Conoce los principales lugares para hacer turismo en Uruapan, lugares donde puedes conocer la cultura que alberga esta ciudad, así como conocer las principales festividades que se celebran cada año en la ciudad, celebraciones tan únicas como la ciudad misma que remarcan la unión entre las costumbres antiguas y las costumbres actuales de los ciudadanos</p>
        </div>
        <div className = "container">
            <Row  xs={1} md={2}>
                <Col>
                <IconShadowCard Link = "/lugares-turisticos" clase = "turismobg1 border-0 card shadow-lg p-3 mb-5 text-decoration-none rounded" img = {turismoIcon3} p = "Lugares turísticos"/>
                </Col>
                <Col>
                <IconShadowCard Link = "/tianguis-artesanal" clase = "turismobg2 border-0 card shadow-lg p-3 mb-5 text-decoration-none rounded" img = {turismoIcon2} p = "Tianguis artesanal"/>
                </Col>
                <Col>
                <IconShadowCard Link = "/festival-de-velas" clase = "turismobg3 border-0 card shadow-lg p-3 mb-5 text-decoration-none rounded" img = {turismoIcon1} p = "Festival de velas"/>
                </Col>
            </Row>
        </div>
        
        <Footer/>
    </div>
)
}
export default Turismo 