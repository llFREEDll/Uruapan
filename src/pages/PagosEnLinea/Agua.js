import React, { useState } from 'react'
import Footer from '../../components/general/Footer'
import NavBar from '../../components/general/NavBar'
import PayPalButtons from '../../components/PagosEnLinea/PayPalButtons'
import {Form,Row,Col,FloatingLabel,Alert } from 'react-bootstrap'
const Agua = () =>{

    //const [datosCorrectos,setDatosCorrectos] = useState(false)
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
        email: "",
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
    const HandleNameChange = e =>{
        const {value} = e.target
            setDatosIngresados((prevState)=>({
                ...prevState,
                name:value
            }))
    }
    const HandleAddressChange = e =>{
        const {value} = e.target
            setDatosIngresados((prevState)=>({
                ...prevState,
                address:value
            }))
    }
    const HandleTomaChange = e =>{
        const {value} = e.target
        if (value.length === 6 && !isNaN(value))
            setDatosIngresados((prevState)=>({
                ...prevState,
                toma:value
            }))
        else 
            setDatosIngresados((prevState)=>({
                ...prevState,
                toma:""
            }))
    }
    const HandleEmailChange = e =>{
        const {value} = e.target
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(value.match(mailformat))
            {
                setDatosIngresados((prevState)=>({
                    ...prevState,
                    email:value
                }))
            }
            else
            {
                setDatosIngresados((prevState)=>({
                    ...prevState,
                    email:""
                }))
            }
    }
    return(
        <div>
            <NavBar/>
            <Row>
                <Col md>
                <div className="container">
                    <div className = " my-5">
                        <FloatingLabel className = "mb-3" controlId="floatingInputGrid" label="Nombre ">
                            <Form.Control type="text" placeholder="Nombre Apellido" onChange  = {HandleNameChange}/>
                        </FloatingLabel>
                        <FloatingLabel className = "mb-3" controlId="floatingInputGrid2" label="Domicilio">
                            <Form.Control className = "mb-3" type="text" placeholder="Calle # Col." onChange  = {HandleAddressChange}/>
                        </FloatingLabel>
                        <FloatingLabel className = "mb-3" controlId="floatingInputGrid3" label="No. de toma">
                            <Form.Control type="number" placeholder="124343432" onChange = {HandleTomaChange}/>
                        </FloatingLabel>
                        <FloatingLabel className = "mb-3" controlId="floatingInputGrid3" label="Correo Electrónico">
                            <Form.Control type="email" placeholder="something@example.com"  onChange = {HandleEmailChange}/>
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
                    </div>
                </Col>
                
                
                <Col md className = " my-5">
                    <div className = "container">
                    {datosIngresados.name !== ""  && datosIngresados.address !== ""
                    && datosIngresados.toma !== "" && datosIngresados.email !== ""
                    && datosIngresados.zona !== "" && datosIngresados.amount !== "" ?  
                                <PayPalButtons/>
                                :
                                <div className = "col w-100 text-center">
                                    <Alert variant="info">
                                        Rellena todos los datos para realizar tu pago, recuerda que estos datos los puedes encontrar en el recibo de pago de CAPASU
                                    </Alert>
                                </div>
                                
                            }
                    </div>
                </Col>
                
            </Row>
            
            
            <Footer/>            
        </div>
    )
}

export default Agua