import axios from 'axios'
import React, { useState } from 'react'
import { Row,Col,Form, Dropdown, Alert, Spinner } from 'react-bootstrap'
import { urls } from '../../apiConection/Links'
const LicenciasComercialesInput = () =>{
    const [loader,setLoader] = useState({show: false})
    const [error, setError] = useState({error: false, body:""})
    const [datosEnviados, setDatosEnviados] = useState({datos: false, body: ""})
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
        //console.log(archivos)
        const {name} = archivos.target
        const files = archivos.target.files
        if(files.length > 0 )
        setDatosIngresados((prevState)=>({
            ...prevState,
            [name]:files[0]
        }));
        else
        setDatosIngresados((prevState)=>({
            ...prevState,
            [name]:false
            }));
        console.log(datosIngresados)
         
    }
    const HandleChange = e =>{
        const {name,value} = e.target
        setDatosIngresados((prevState)=>({
            ...prevState,
            [name]:value
        }))
        console.log(datosIngresados)
    }

    const PostInfo = async() =>{
        let form = new FormData();
        let fecha = new Date()

        form.append("file1", datosIngresados.file1);
        form.append("file2", datosIngresados.file2);
        form.append("file3", datosIngresados.file3);
        form.append("file4", datosIngresados.file4);
        form.append("file5", datosIngresados.file5);
        form.append("file6", datosIngresados.file6);
        form.append("file7", datosIngresados.file7);
        form.append("file8", datosIngresados.file8);
        form.append("file9", datosIngresados.file9);
        form.append("file10", datosIngresados.file10);
        form.append("file11", datosIngresados.file11);
        form.append("name", datosIngresados.name);
        form.append("numero", datosIngresados.numero);
        form.append("email", datosIngresados.email);
        form.append("date", fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate())
        form.append("METHOD","POST");
        await axios.post(urls.licenciaComercial,form,{headers:{'content-type':'multipart/form-data'}})
        .then(()=>{
            setDatosEnviados({
                body: "",
                datos:true
            })
            setLoader({show: false})
        }).catch(error=>{
            setLoader({show: false})
            setDatosEnviados({
                datos: false,
                body:"Ocurrió un error al enviar los datos por favor inténtalo más tarde "
            })
            console.log(error)

            
          })
    }

    const EnviarDatos = async () =>{
        setLoader({show: true})
        let errorInput = ""
        var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        errorInput += datosIngresados.file1 !== false ? "" : " Solicitud firmada por el titular o representante legal \\n" 
        errorInput += datosIngresados.file2 !== false ? "" : " Original o copia de identificación oficial del titular o representante legal \\n" 
        errorInput += datosIngresados.file3 !== false ? "" : " Identificación oficial de la persona que realiza el trámite \\n" 
        errorInput += datosIngresados.file4 !== false ? "" : " R.F.C. con domicilio y actividad comercial actualizado \\n" 
        errorInput += datosIngresados.file5 !== false ? "" : " Contrato de arrendamiento o comodato vigente \\n" 
        errorInput += datosIngresados.file6 !== false ? "" : " Comprobante de domicilio del local no mayor a 4 meses de antigüedad (CFE, Agua, teléfono o predial) \\n" 
        errorInput += datosIngresados.file7 !== false ? "" : " Recibo predial vigente \\n" 
        errorInput += datosIngresados.file8 !== false ? "" : " Recibo de agua vigente \\n"  
        errorInput += datosIngresados.file9 !== false ? "" : " Verificación de inspectores varios ramos \\n" 
        errorInput += datosIngresados.file10 !== false ? "" : " Dictamen de protección civil vigente \\n" 
        errorInput += datosIngresados.file11 !== false ? "" : " INE del arrendador o comodante \\n" 
        if(datosIngresados.email !== ""){
            if(!datosIngresados.email.match(mailformat))
                errorInput += "Correo electrónico no válido \n"
        }
        else
            errorInput += "Correo electrónico \n"
        
        errorInput += datosIngresados.name !== "" ? "" : "Nombre \n"
        errorInput += !isNaN(datosIngresados.numero)? "" : "Número \n"

        if(errorInput === ""){
            setError((prevState)=>({
                ...prevState,
                error:false
            }))
            await PostInfo()
        }
        else {
            setError({
                error:true,
                body : errorInput
            })
            setLoader({show: false})
        }
        
    }
    
    return(
        <>
            <Row xs={1} md={2}>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Solicitud firmada por el titular o representante legal</Form.Label>
                        <Form.Control name = "file1" type="file" accept = ".pdf" onChange  = {(e)=> HandleImageUpload(e)}/>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Original o copia de identificación oficial del titular o representante legal</Form.Label>
                         <Form.Control name = "file2" type="file" accept = ".pdf" onChange  = {(e)=> HandleImageUpload(e)}/>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Identificación oficial de la persona que realiza el trámite</Form.Label>
                        <Form.Control name = "file3" type="file" accept = ".pdf" onChange  = {(e)=> HandleImageUpload(e)}/>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>R.F.C. con domicilio y actividad comercial actualizado</Form.Label>
                        <Form.Control name = "file4" type="file" accept = ".pdf" onChange  = {(e)=> HandleImageUpload(e)}/>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Contrato de arrendamiento o comodato vigente</Form.Label>
                        <Form.Control name = "file5" type="file" accept = ".pdf"  onChange  = {(e)=> HandleImageUpload(e)}/>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Comprobante de domicilio del local no mayor a 4 meses de antigüedad (CFE, Agua, teléfono o predial)</Form.Label>
                        <Form.Control name = "file6" type="file" accept = ".pdf" onChange  = {(e)=> HandleImageUpload(e)}/>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Recibo predial vigente</Form.Label>
                        <Form.Control name = "file7" type="file" accept = ".pdf" onChange  = {(e)=> HandleImageUpload(e)}/>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Recibo de agua vigente</Form.Label>
                        <Form.Control name = "file8" type="file" accept = ".pdf" onChange  = {(e)=> HandleImageUpload(e)}/>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Verificación de inspectores varios ramos</Form.Label>
                        <Form.Control name = "file9" type="file" accept = ".pdf" onChange  = {(e)=> HandleImageUpload(e)}/>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Dictamen de protección civil vigente</Form.Label>
                        <Form.Control name = "file10" type="file" accept = ".pdf" onChange  = {(e)=> HandleImageUpload(e)}/>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>INE del arrendador o comodante</Form.Label>
                        <Form.Control name = "file11" type="file" accept = ".pdf" onChange  = {(e)=> HandleImageUpload(e)}/>
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
                        <Form.Control name = "name" onChange = {HandleChange} type="text" placeholder="Ingresa tu nombre" />
                    </Form.Group>
                </Col>   
                <Col>
                    <Form.Group controlId="formCorreo">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control name = "email" onChange = {HandleChange} type="email" placeholder="Ingresa tu correo electrónico" />
                    </Form.Group>
                </Col>   
                <Col>
                    <Form.Group controlId="formTelefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control name = "numero" onChange = {HandleChange} type="number" placeholder="Ingresa tu número de teléfono" />
                    </Form.Group>
                </Col>   
            </Row>
            <div className = "text-center">
                {error.error  ? 
                <Alert className = "my-3 text-start" variant = "danger">
                    <Alert.Heading>Error, se encontraron los siguientes campos vacíos</Alert.Heading>
                    
                    {error.body.split('\\n').map( (it, i) => <p key={'x'+i}>{it}</p> )}
                </Alert>
                :
                <></>}
                {datosEnviados.datos ? 
                <Alert className = "my-3 text-start" variant = "success">
                    <Alert.Heading>Datos enviados correctamente</Alert.Heading>
                    Tus documentos fueron enviados para su revisión,  se te informará  si tu solicitud fue aprobada o rechazada en un lapso no mayor a tres días hábiles

                </Alert>
                :<></>
                }
                {datosEnviados.body !== "" ?
                <Alert className = "my-3 text-start" variant = "danger">
                    <Alert.Heading>Ocurrió un error al enviar tus datos</Alert.Heading>
                    Por favor inténtalo más tarde 

                </Alert>
                :<></>
                }
                {loader.show?
                    <div className = "my-3 text-center">
                        <Spinner animation="grow" variant="success" />
                    </div>
                :<></>
                }
                <input onClick = {EnviarDatos} type = "button" className = "mt-5 text-decoration-none btnRedColor btn-lg btn-danger" value = "Enviar"></input>
            </div>
            
        </>
    )
}

export default LicenciasComercialesInput