import React, { useState } from 'react'
import Footer from '../../components/general/Footer'
import NavBar from '../../components/general/NavBar'
import Modal from 'react-bootstrap/Modal'
import CapasuLg from '../../assets/capasuLogo.png'
import {Form,Row,Col,FloatingLabel,Alert } from 'react-bootstrap'
import RevisarInputsAgua from '../../components/PagosEnLinea/RevisarInputsAgua'
import PayPalButtonsAgua from '../../components/PagosEnLinea/PayPalButtonsAgua'

const PagoCapasu = () =>{

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
    const [PaypalBtns,setPaypalBtns] = useState(false);
    const [modalConfirmarDatos,setModalConfirmarDatos] = useState(false)
    const [datosIngresados,setDatosIngresados] = useState({
        name: "",
        address: "",
        toma: "",
        email: "",
        zona: tipoDeZona.zona1.name,
        amount: tipoDeZona.zona1.amount
    })
    const [error,setError] = useState(
        {
            name: false,
            address:false,
            email:false,
            toma:false,
            zona:false,
            amount:false

        });
    const HandleZonaChange = e =>{
        
        const {value} = e.target

        setError((prevState)=>({
            ...prevState,
            zona:true
        }));
        
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

        setError((prevState)=>({
            ...prevState,
            name:true
        }));

        setDatosIngresados((prevState)=>({
            ...prevState,
            name:value
        }))
    }
    const HandleAddressChange = e =>{
        
        const {value} = e.target
        
        setError((prevState)=>({
            ...prevState,
            address:true
        }));

        setDatosIngresados((prevState)=>({
            ...prevState,
            address:value    
        }))
    }
    const HandleTomaChange = e =>{
        
        const {value} = e.target

        setError((prevState)=>({
            ...prevState,
            toma:true
        }));


        if (value.length === 6 && !isNaN(value))
            setDatosIngresados((prevState)=>({
                ...prevState,
                toma:value
            }))
        else 
            setDatosIngresados((prevState)=>({
                ...prevState,
                toma:"tomaError"
                //"La toma tiene que ser un número de 6 dígitos"
            }))
    }
    const HandleEmailChange = e =>{
        
        const {value} = e.target

        setError((prevState)=>({
            ...prevState,
            email:true
        }));

        var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
                    email:"emailError"
                }))
            }
    }
    const OpenCLoseConfirmarDatos = ()=>{
        setModalConfirmarDatos(!modalConfirmarDatos)
    }
    const ValidarDatos = () =>{
        if(datosIngresados.name !== "" && datosIngresados.address !== "" && datosIngresados.folio !== "" && 
        datosIngresados.email !== "" && datosIngresados.descripcion !== "" 
        && datosIngresados.fechaaplicacion !== "") {
            setPaypalBtns(true);
            OpenCLoseConfirmarDatos();
        }
        else{
            setPaypalBtns(false);
            OpenCLoseConfirmarDatos();
        }
        
    }
    return(
        <div>
            <NavBar/>
            
            <div className = "container text-center">
                <img src={CapasuLg} className="image-fluid" alt=""/>
            </div>
            <Row>
                <Col md className = "w-50">
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
                
                
                <Col md className = "my-5 w-50">
                    <div className = "container">
                        <RevisarInputsAgua datosIngresados = {datosIngresados} error = {error}/>
                        <Alert variant="info">
                            Rellena todos los datos para realizar tu pago, recuerda que estos datos los puedes encontrar en el recibo de pago de CAPASU
                        </Alert>
                        <div className = "alert alert-warning">
                            <p className = "">Una vez realizado, tu pago se verá reflejado en no más de tres días hábiles</p>
                        </div>
                        <div className = "text-center">
                            <input onClick =  {ValidarDatos} type = "button" className = "mt-3 text-decoration-none btnRedColor btn-lg btn-danger" value = "Confirmar mis datos "></input>
                        </div>
                    </div>
                </Col>
                
            </Row>       
            <Modal 
            size="lg"
            show = {modalConfirmarDatos}
            onHide = {()=>OpenCLoseConfirmarDatos()}>
                <Modal.Header closeButton>Confirmar tus datos</Modal.Header>
                <Modal.Body>
                    {
                        PaypalBtns ?
                        <div className = "text-center">
                            <p><strong>Nombre:</strong> {datosIngresados.name}</p>
                            <p><strong>Dirección:</strong> {datosIngresados.address}</p>
                            <p><strong>Correo Electrónico:</strong> {datosIngresados.email}</p>
                            <p><strong>Folio:</strong> {datosIngresados.folio}</p>
                            <p><strong>Fecha de Aplicación:</strong> {datosIngresados.fechaaplicacion}</p>
                            <p><strong>Descripción:</strong> {datosIngresados.descripcion}</p>
                            <p><strong>Monto a pagar:</strong> {datosIngresados.amount}</p>
                            <PayPalButtonsAgua data= {datosIngresados} error = {error}/>
                        </div>
                        :
                        <div>
                            <h3 className = "alert alert-danger">Alguno los datos ingresados es incorrecto por favor revisa tus datos</h3>
                        </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <button className = "mt-3 text-decoration-none btnRedColor btn btn-danger" onClick = {()=>OpenCLoseConfirmarDatos()} >Cerrar</button>
                </Modal.Footer>
            </Modal>     
            <Footer/>            
        </div>
    )
}

export default PagoCapasu