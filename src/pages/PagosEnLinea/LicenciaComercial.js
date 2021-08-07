import React from 'react'
import { Accordion,ListGroup} from 'react-bootstrap';
import Footer from '../../components/general/Footer';
import NavBar from '../../components/general/NavBar';
import LicenciasComercialesInput from '../../components/PagosEnLinea/LicenciaComercialInputs';

class LicenciaComercial extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <>
                <NavBar/>
                    <div className = "container my-5">
                        
                        <Accordion defaultActiveKey="0" className = "my-5">
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>Requisitos para tramitar tu licencia comercial</Accordion.Header>
                            <Accordion.Body>

                            <ListGroup variant = "flush">
                                <ListGroup.Item action variant = "dark">* Solicitud firmada por el titular o representante legal</ListGroup.Item>
                                <ListGroup.Item action>* Original o copia de identificación oficial del titular o representante legal</ListGroup.Item>
                                <ListGroup.Item action variant = "dark">* Identificación oficial de la persona que realiza el trámite </ListGroup.Item>
                                <ListGroup.Item action >* R.F.C. con domicilio y actividad comercial actualizado</ListGroup.Item>
                                <ListGroup.Item action variant = "dark">* Contrato de arrendamiento o comodato vigente</ListGroup.Item>
                                <ListGroup.Item action >* Comprobante de domicilio del local no mayor a 4 meses de antigüedad (CFE, Agua, teléfono o predial)</ListGroup.Item>
                                <ListGroup.Item action variant = "dark">* Recibo predial vigente </ListGroup.Item>
                                <ListGroup.Item action >* Recibo de agua vigente</ListGroup.Item>
                                <ListGroup.Item action variant = "dark">* Verificación de inspectores varios ramos </ListGroup.Item>
                                <ListGroup.Item action >* Dictamen de protección civil vigente </ListGroup.Item>
                                <ListGroup.Item action variant = "dark">* INE del arrendador o comodante </ListGroup.Item>

                            </ListGroup> 

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" >
                            <Accordion.Header >Ya tengo los papeles necesarios</Accordion.Header>
                            <Accordion.Body>
                                <LicenciasComercialesInput/>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        
                    </div>
                <Footer/>
            </>
        )
    }
}

export default LicenciaComercial