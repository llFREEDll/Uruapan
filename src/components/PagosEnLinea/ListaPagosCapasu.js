import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { urls } from '../../apiConection/Links'
import 'table2excel';

const ListaPagosCapasu = () =>{
    const Table2Excel = window.Table2Excel;
    const [data,setData] = useState([])
      //Metodo get para obtener los items de la DB
      const GetItems = async() =>{
        await axios.get(urls.pagosCapasu)
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
        table2excel.export(document.querySelectorAll("#CapasuTable"));
    }
    return (
        <>
            <div className ="container text-center">
                <h1>Lista de pagos </h1>
                {data !== [] ?
                <>
                <Table id = "CapasuTable" striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>No. Toma</th>
                            <th>Correo Electrónico</th>
                            <th>Zona</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item =>(
                            <tr key = {"capasuPago" + item.id}>
                                <td>{item.date}</td>
                                <td>{item.name}</td>
                                <td>{item.address.toString()}</td>
                                <td>{item.toma}</td>
                                <td>{item.email}</td>
                                <td>{item.zona}</td>
                                <td>{item.amount}</td>    
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

export default ListaPagosCapasu