import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Col, Modal, Row, Spinner, Table } from 'react-bootstrap'
import { urls } from '../../apiConection/Links'

const ListaPagosLicenciaComercial = () =>{
    const [data,setData] = useState([])
    const [pagoSeleccionado,setPagoSeleccionado] = useState([])
    const [modal,setModal] = useState(false)
    const OpenCLoseModal = ()=>{
        setModal(!modal)
    }
      //Metodo get para obtener los items de la DB
      const GetItems = async() =>{
        await axios.get(urls.licenciaComercial)
        .then(response =>{
            setData(response.data)
        }).catch(error=>{
            console.log(error);
          })
    }

    useEffect(()=>{
        GetItems();
        
    },[])

    const SeleccionarSolicitud = async(item) =>{
        
        setPagoSeleccionado(item);
        OpenCLoseModal();
    }
    const Descargar = async(file) =>{
        
        let id = "", name = "";

        if(file === "1" ){
            id = pagoSeleccionado.file1;
            name = "Solicitud firmada por el titular o representante legal";
        }else
        if(file === "2" ){
            id = pagoSeleccionado.file2;
            name = "Original o copia de identificación oficial del titular o representante legal";
        }else
        if(file === "3" ){
            id = pagoSeleccionado.file2;
            name = "Identificación oficial de la persona que realiza el trámite";
        }else
        if(file === "4" ){
            id = pagoSeleccionado.file2;
            name = "R.F.C. con domicilio y actividad comercial actualizado";
        }else
        if(file === "5" ){
            id = pagoSeleccionado.file2;
            name = "Contrato de arrendamiento o comodato vigente";
        }else
        if(file === "6" ){
            id = pagoSeleccionado.file2;
            name = "Comprobante de domicilio del local no mayor a 4 meses de antigüedad (CFE, Agua, teléfono o predial)";
        }else
        if(file === "7" ){
            id = pagoSeleccionado.file2;
            name = "Recibo predial vigente";
        }else
        if(file === "8" ){
            id = pagoSeleccionado.file2;
            name = "Recibo de agua vigente";
        }else
        if(file === "9" ){
            id = pagoSeleccionado.file2;
            name = "Verificación de inspectores varios ramos";
        }else
        if(file === "10" ){
            id = pagoSeleccionado.file2;
            name = "Dictamen de protección civil vigente";
        }else
        if(file === "11" ){
            id = pagoSeleccionado.file2;
            name = "INE del arrendador o comodante";
        }
        GetDescarga(id,name);
    }
    const GetDescarga = (id, name) =>{
        axios({
            url: urls.descargarLC + "?id=" + id, 
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', name + '.pdf'); 
            document.body.appendChild(link);
            link.click();
        });
    }
    return (
        <>
            <div className ="container text-center">
                <h1>Lista de pagos </h1>
                {data.length > 0 ?
                <>
                <Table id = "CapasuTable" striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Correo Electrónico</th>
                            <th>Archivos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) =>(
                            <tr key = {"lcPago" + item.id}>
                                <td>{item.date}</td>
                                <td>{item.name}</td>
                                <td>{item.numero}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button onClick = {()=>SeleccionarSolicitud(item)}  className="text-decoration-none btnRedColor btn-lg btn-danger">Descargar</button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal 
                size="xl"
                show = {modal}
                onHide = {()=>OpenCLoseModal()}>
                    <Modal.Header closeButton>Solicitud de {pagoSeleccionado.name}</Modal.Header>
                    <Modal.Body>
                    <Row xs={1} md={3}>
                        <Col> 
                            
                            <p>Solicitud firmada por el titular o representante legal</p>
                            <button onClick = {()=>Descargar("1")}  className="text-decoration-none btnRedColor btn btn-danger">Descargar</button> 
                            
                        </Col>
                        <Col> 
                            <p>Original o copia de identificación oficial del titular o representante legal</p>
                            <button onClick = {()=>Descargar("2")}  className="text-decoration-none btnRedColor btn btn-danger">Descargar</button> 
                            
                        </Col>
                        <Col> 
                            <p>Identificación oficial de la persona que realiza el trámite</p>
                            <button onClick = {()=>Descargar("3")}  className="text-decoration-none btnRedColor btn btn-danger">Descargar</button> 
                            
                        </Col>
                        <Col> 
                            <p>R.F.C. con domicilio y actividad comercial actualizado</p>
                            <button onClick = {()=>Descargar("4")}  className="text-decoration-none btnRedColor btn btn-danger">Descargar</button> 
                            
                        </Col>
                        <Col> 
                            <p>Contrato de arrendamiento o comodato vigente</p>
                            <button onClick = {()=>Descargar("5")}  className="text-decoration-none btnRedColor btn btn-danger">Descargar</button> 
                            
                        </Col>
                        <Col> 
                            
                            <p>Comprobante de domicilio del local no mayor a 4 meses de antigüedad (CFE, Agua, teléfono o predial)</p>
                            <button onClick = {()=>Descargar("6")}  className="text-decoration-none btnRedColor btn btn-danger">Descargar</button> 
                            
                        </Col>
                        <Col> 
                            <p>Recibo predial vigente</p>
                            <button onClick = {()=>Descargar("7")}  className="text-decoration-none btnRedColor btn btn-danger">Descargar</button> 
                        </Col>
                        <Col> 
                            
                            <p>Recibo de agua vigente</p>
                            <button onClick = {()=>Descargar("8")}  className="text-decoration-none btnRedColor btn btn-danger">Descargar</button> 
                            
                        </Col>
                        <Col> 
                            
                            <p>Verificación de inspectores varios ramos</p>
                            <button onClick = {()=>Descargar("9")}  className="text-decoration-none btnRedColor btn btn-danger">Descargar</button> 
                            
                        </Col>
                        <Col> 
                            
                            <p>Dictamen de protección civil vigente</p>
                            <button onClick = {()=>Descargar("10")}  className="text-decoration-none btnRedColor btn btn-danger">Descargar</button> 
                            
                        </Col>
                        <Col> 
                            
                            <p>INE del arrendador o comodante</p>
                            <button onClick = {()=>Descargar("11")}  className="text-decoration-none btnRedColor btn btn-danger">Descargar</button> 
                            
                        </Col>
                    </Row>
                    </Modal.Body>
                </Modal>
                </>
                :
                <div className = "text-center mt-4">
                    <Spinner animation="grow" variant="success" />
                </div>
                }

            </div>
                
        </>
    )
}

export default ListaPagosLicenciaComercial