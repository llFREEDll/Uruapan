import React, { useState } from 'react'
import { Row,Col,Form, Dropdown } from 'react-bootstrap'

const LicenciasComercialesInput = () =>{
    const [datosIngresados,setDatosIngresados] = useState({
        file1 : false,
        file2: false, file3: false,
        file4: false, file5: false,
        file6: false, file7: false,
        file8: false, file9: false,
        file10: false, file11: false, name: "",
        email: "", numero:0
    })

    const HandleImageUpload = (archivos) =>{
        console.log(archivos)
    }

    return(
        <>
            <Row xs={1} md={2}>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Solicitud firmada por el titular o representante legal</Form.Label>
                        <Form.Control type="file" accept = ".pdf" accept = ".pdf" onChange  = {(e)=> HandleImageUpload(e.target.files)}/>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Original o copia de identificación oficial del titular o representante legal</Form.Label>
                         <Form.Control type="file" accept = ".pdf" />
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Identificación oficial de la persona que realiza el trámite</Form.Label>
                        <Form.Control type="file" accept = ".pdf" />
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>R.F.C. con domicilio y actividad comercial actualizado</Form.Label>
                        <Form.Control type="file" accept = ".pdf" />
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Contrato de arrendamiento o comodato vigente</Form.Label>
                        <Form.Control type="file" accept = ".pdf"  />
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Comprobante de domicilio del local no mayor a 4 meses de antigüedad (CFE, Agua, teléfono o predial)</Form.Label>
                        <Form.Control type="file" accept = ".pdf" />
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Recibo predial vigente</Form.Label>
                        <Form.Control type="file" accept = ".pdf" />
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Recibo de agua vigente</Form.Label>
                        <Form.Control type="file" accept = ".pdf" />
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Verificación de inspectores varios ramos</Form.Label>
                        <Form.Control type="file" accept = ".pdf" />
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Dictamen de protección civil vigente</Form.Label>
                        <Form.Control type="file" accept = ".pdf" />
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>INE del arrendador o comodante</Form.Label>
                        <Form.Control type="file" accept = ".pdf" />
                   </Form.Group>
                </Col>

                
            </Row>
            <div className = "text-center my-5">
                <Dropdown.Divider />
                <h3>Información de contacto</h3>
                <Dropdown.Divider />
            </div>
            <Row xs={1} md={2}>
                <Col>
                    <Form.Group controlId="formName">
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu nombre" />
                    </Form.Group>
                </Col>   
                <Col>
                    <Form.Group controlId="formCorreo">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
                    </Form.Group>
                </Col>   
                <Col>
                    <Form.Group controlId="formTelefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number" placeholder="Ingresa tu número de teléfono" />
                    </Form.Group>
                </Col>   
            </Row>
            <div className = "text-center">
                <input type = "button" className = "mt-5 text-decoration-none btnRedColor btn-lg btn-danger" value = "Enviar"></input>
            </div>
            
        </>
    )
}

export default LicenciasComercialesInput