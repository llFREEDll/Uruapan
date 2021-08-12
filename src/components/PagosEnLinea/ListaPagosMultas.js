import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { urls } from '../../apiConection/Links'
import 'table2excel';

const ListaPagosMultas = () =>{
    const Table2Excel = window.Table2Excel;
    const [data,setData] = useState([])
      //Metodo get para obtener los items de la DB
      const GetItems = async() =>{
        await axios.get(urls.pagosMultas)
        .then(response =>{
            setData(response.data)
        }).catch(error=>{
            console.log(error);
          })
    }

    useEffect(()=>{
        GetItems()
        
    },[])

    const exportToExcel = () =>{
        const table2excel = new Table2Excel();
        table2excel.export(document.querySelectorAll("#MultasTable"));
    }
    return (
        <>
            <div className ="container text-center">
                <h1>Lista de pagos </h1>
                {data !== [] ?
                <>
                <Table id = "MultasTable" striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Fecha de aplicación</th>
                            <th>Fecha de pago</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Correo Electrónico</th>
                            <th>Folio</th>
                            <th>Descripción</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item =>(
                            <tr key = {"capasuPago" + item.id}>
                                <td>{item.fecha_aplicada}</td>
                                <td>{item.fecha_pago}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.email}</td>
                                <td>{item.folio}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.monto}</td>    
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className = "text-center">
                    <button onClick = {exportToExcel} className="text-decoration-none btnRedColor btn-lg btn-danger">Descargar</button>
                </div>
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

export default ListaPagosMultas