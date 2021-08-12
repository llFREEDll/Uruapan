import React, { useState } from 'react'
import NavBar from '../../components/general/NavBar'
import Footer from '../../components/general/Footer'
import {Form,Row,Col,FloatingLabel,Alert } from 'react-bootstrap'
import RevisarInputsMultas from '../../components/PagosEnLinea/RevisarInputsMultas'
import Modal from 'react-bootstrap/Modal'
import PayPalButtonsMultas from '../../components/PagosEnLinea/PayPalButtonsMultas'
const Multas = () =>{
    const [PaypalBtns,setPaypalBtns] = useState(false);
    const [modalConfirmarDatos,setModalConfirmarDatos] = useState(false)
    const [datosIngresados,setDatosIngresados] = useState(
        {
            name:"",
            address:"",
            email:"",
            folio:"",
            fechaaplicacion:"",
            descripcion:"",
            amount:""
        });
    const [error,setError] = useState(
        {
            name: false,
            address:false,
            email:false,
            folio:false,
            fechaaplicacion:false,
            descripcion:false,
            amount:false

        });
    const OpenCLoseConfirmarDatos = ()=>{
        setModalConfirmarDatos(!modalConfirmarDatos)
    }
    const HandleNameChange = e =>{
        
        const {value} = e.target;
        
        setError((prevState)=>({
            ...prevState,
            name:true
        }));

        setDatosIngresados((prevState)=>({
            ...prevState,
            name:value
        }));
            
    }
    const HandleAddressChange = e =>{
        const {value} = e.target;
        setError((prevState)=>({
            ...prevState,
            address:true
        }));
        setDatosIngresados((prevState)=>({
            ...prevState,
            address:value
        }));
    }
    const HandleEmailChange = e =>{

        const {value} = e.target;
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
    const HandleDescripcionChange = e =>{
        const {value} = e.target;
        setError((prevState)=>({
            ...prevState,
            descripcion:true
        }));
        setDatosIngresados((prevState)=>({
            ...prevState,
            descripcion:value
        }));
    }
    const HandleFechaAplicadaChange = e =>{
        
        const {value} = e.target;
        setError((prevState)=>({
            ...prevState,
            fechaaplicacion:true
        }));
        setDatosIngresados((prevState)=>({
            ...prevState,
            fechaaplicacion:value
        }));
    }
    const HandleFolioChange = e =>{
        const {value} = e.target;
        setError((prevState)=>({
            ...prevState,
            folio:true
        }));
        setDatosIngresados((prevState)=>({
            ...prevState,
            folio:value
        }));
    }
    const HandleMontoChange = e =>{
        const {value} = e.target;
        setError((prevState)=>({
            ...prevState,
            amount:true
        }));
        if(!isNaN(value))
        {
            setDatosIngresados((prevState)=>({
                ...prevState,
                amount:value
                }))
        }
        else
        {
            setDatosIngresados((prevState)=>({
                ...prevState,
                amount:"amountError"
            }))
        }
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
    return (
        <div>
            <NavBar/>
            <div className = "my-5 container text-center">
                <h1>PORTAL DE PAGO DE MULTAS</h1>
            </div>
            <Row>
                <Col md className = "w-50">
                    <div className=" container">
                        <div className = " my-5">
                            <FloatingLabel className = "mb-3" label="Nombre ">
                                <Form.Control type="text" placeholder="Nombre Apellido" onChange  = {HandleNameChange}/>
                            </FloatingLabel>
                            <FloatingLabel className = "mb-3" label="Domicilio">
                                <Form.Control className = "mb-3" type="text" placeholder="Calle # Col." onChange  = {HandleAddressChange}/>
                            </FloatingLabel>
                            <FloatingLabel className = "mb-3" label="Correo Electrónico">
                                <Form.Control type="email" placeholder="something@example.com"  onChange = {HandleEmailChange}/>
                            </FloatingLabel>
                            <FloatingLabel className = "mb-3"  label="No. De Folio de la multa">
                                <Form.Control type="number" placeholder="435345435" onChange = {HandleFolioChange}/>
                            </FloatingLabel>
                            <FloatingLabel className = "mb-3" label="Fecha en que se aplicó la multa">
                                <Form.Control type="date" placeholder="01-02-2021" onChange = {HandleFechaAplicadaChange}/>
                            </FloatingLabel>
                            <FloatingLabel className = "mb-3"  label="Descripción de la multa">
                                <Form.Control type="text" placeholder="descripción" onChange = {HandleDescripcionChange}/>
                            </FloatingLabel>
                            <FloatingLabel className = "mb-3"  label="Total a pagar">
                                <Form.Control type="text" placeholder="1200.00" onChange = {HandleMontoChange}/>
                            </FloatingLabel>
                        </div>
                    </div>
                </Col>
                
                
                <Col md className = "my-5 w-50">
                    <div className = "container">
                            
                        <RevisarInputsMultas datosIngresados = {datosIngresados} error = {error}/>
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
                            <PayPalButtonsMultas data= {datosIngresados}/>
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
export default Multas