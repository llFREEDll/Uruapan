import React, { useState } from 'react'
import Footer from '../../components/general/Footer'
import NavBar from '../../components/general/NavBar'
import PayPalButtons from '../../components/PagosEnLinea/PayPalButtons'
import {Form,Row,Col,FloatingLabel,Alert } from 'react-bootstrap'
const Agua = () =>{

    const [datosCorrectos,setDatosCorrectos] = useState(false)
    const [errorDetectado,setErrorDetectado] = useState([])
    const tipoDeZona = {
        zona1:{
            name : "Popular",
            amount: "800.00"
        },
        zona2:{
            name : "Media",
            amount: "1600.00"
        },
        zona3:{
            name : "Residencial",
            amount: "2300.00"
        },
        zona4:{
            name : "Industrial",
            amount: "3400.00"
        }
    }
    const [datosIngresados,setDatosIngresados] = useState({
        name: "",
        address: "",
        toma: "",
        zona: tipoDeZona.zona1.name,
        amount: tipoDeZona.zona1.amount
    })
    const HandleZonaChange = e =>{
        const {value} = e.target
        var monto = 0
        if(value === tipoDeZona.zona1.name)
            monto = tipoDeZona.zona1.amount
        if(value === tipoDeZona.zona2.name)
            monto = tipoDeZona.zona2.amount
        if(value === tipoDeZona.zona3.name)
            monto = tipoDeZona.zona3.amount
        if(value === tipoDeZona.zona4.name)
            monto = tipoDeZona.zona4.amount
            setDatosIngresados((prevState)=>({
                ...prevState,
                amount:monto
            }))
    }
    const HandleChange = e =>{
        const {name,value} = e.target
            setDatosIngresados((prevState)=>({
                ...prevState,
                [name]:value
            }))
    }

    const InputDone = () =>{
        let listAux = []
        if(datosIngresados.name === "")
            listAux.push({error: "Campo nombre vacío"}) 
            
        if(datosIngresados.address === "")
            listAux.push({error: "Campo domicilio vacío"}) 
            
        if(datosIngresados.toma === "")
            listAux.push({error: "Campo N. de toma vacío"}) 
        else 
            if(datosIngresados.toma.length !== 6 || isNaN(datosIngresados.toma))
                listAux.push({error: "Campo N. de toma incorrecto"}) 

        if(datosIngresados.zona === "")
            listAux.push({error: "Campo zona vacío"}) 

        if(datosIngresados.amount === "")
            listAux.push({error: "Campo monto a pagar vacío"}) 
        
        setErrorDetectado(listAux)
        if(listAux.length === 0){
            setDatosCorrectos(true);
        }
        else{
            setDatosCorrectos(false);
        }

    }
    return(
        <div>
            <NavBar/>
            <Row className="g-2 mb-3" >
                <Col md>
                    <div className = "container my-5">
                        <FloatingLabel className = "mb-3" controlId="floatingInputGrid" label="Nombre ">
                            <Form.Control type="text" placeholder="Nombre Apellido" name = "name" onChange  = {HandleChange}/>
                        </FloatingLabel>
                        <FloatingLabel className = "mb-3" controlId="floatingInputGrid2" label="Domicilio">
                            <Form.Control className = "mb-3" type="text" placeholder="Calle # Col." name = "address" onChange  = {HandleChange}/>
                        </FloatingLabel>
                        <FloatingLabel className = "mb-3" controlId="floatingInputGrid3" label="No. de toma">
                            <Form.Control type="number" placeholder="124343432" name = "toma" onChange = {HandleChange}/>
                        </FloatingLabel>

                        <Row className="g-2 mb-3" >
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid4" label="Zona">
                                    <Form.Select aria-label="Floating label select example" name = "zona" onChange = {HandleZonaChange}>
                                        <option value={tipoDeZona.zona1.name}>{tipoDeZona.zona1.name}</option>
                                        <option value={tipoDeZona.zona2.name}>{tipoDeZona.zona2.name}</option>
                                        <option value={tipoDeZona.zona3.name}>{tipoDeZona.zona3.name}</option>
                                        <option value={tipoDeZona.zona4.name}>{tipoDeZona.zona4.name}</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid5" label="Monto a Pagar">
                                    <Form.Control type="text" placeholder="0.00" disabled name = "amount" value = {datosIngresados && datosIngresados.amount}/>
                                </FloatingLabel>
                            </Col>
                            
                        </Row>
                    </div>
                </Col>
                <Col md>
                    <div className = "container my-5"></div>
                    {datosCorrectos? 
                                <PayPalButtons/>
                                :
                                <div>
                                    
                                    <div className = "col w-100 text-center">
                                    {errorDetectado.length > 0?
                                        <Alert variant="danger">
                                            {errorDetectado.map((item) =>(
                                                <p key = {item.error}>{item.error}</p>
                                            ))}
                                        </Alert>
                                        :
                                        <Alert variant="info">
                                            Rellena todos los datos para realizar tu pago, recuerda que estos datos los puedes encontrar en el recibo de pago de CAPASU
                                        </Alert>
                                        }
                                        <button className="border-0 w-50 text-decoration-none btnRedColor btn-lg btn-danger" onClick = {InputDone}>Pagar</button>
                                    </div>
                                </div>
                                
                            }
                </Col>
            </Row>
            
            
            <Footer/>            
        </div>
    )
}

export default Agua