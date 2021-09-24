import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import {urls} from '../../apiConection/Links'
import { Spinner, Table } from 'react-bootstrap';

const AdminComunicadosMain = () => {
    // estados 
    //datos recibidos de la base de datos 
    const [data,setData] = useState([])
    //manejadores para mostrar y ocultar los modales
    const [modalInsertar,setModalInsertar] = useState(false)
    const [modalEditar,setModalEditar] = useState(false)
    const [modalEliminar, setModalEliminar]= useState(false);

    //objeto para identificar con cual comunicado de la lista estamos
    //trabajando de manera especifica
    const [comunicadoSeleccionado,setComunicadoSeleccionado] = useState({
        id:0,
        titulo:"",
        imagen:"",
        contenido : "",
        fecha : ""
    })
    
    //manejador para recibir los datos de entrada del usuario del modal insertar
    //cada que se escribe una letra se actualiza
    const HandleChange = e =>{
        const {name,value} = e.target
        setComunicadoSeleccionado((prevState)=>({
            ...prevState,
            [name]:value
        }))
        //console.log(comunicadoSeleccionado)
    }

    //se activan en el on click de los botones
    //insertar, eliminar, editar correspondientemente
    const OpenCLoseModalInsertar = ()=>{
        setModalInsertar(!modalInsertar)
    }
    const OpenCLoseModalEliminar = ()=>{
        setModalEliminar(!modalEliminar)
    }
    const OpenCLoseModalEditar = ()=>{
        setModalEditar(!modalEditar)
    }

    //Metodo get para obtener los comunicados de la DB
    const GetComunicados = async() =>{
        await axios.get(urls.comunicadosMain)
        .then(response =>{
            setData(response.data)
        }).catch(error=>{
            console.log(error);
          })
    }

    //Metodo POST para enviar un nuevo comunicado a la DB
    const PostComunicados = async() =>{
        var form = new FormData();
        form.append("titulo", comunicadoSeleccionado.titulo );
        form.append("imagen",comunicadoSeleccionado.imagen);
        form.append("contenido",comunicadoSeleccionado.contenido);
        form.append("fecha",comunicadoSeleccionado.fecha);
        form.append("METHOD","POST");
        await axios.post(urls.comunicadosMain,form,{headers:{'content-type':'multipart/form-data'}})
        .then(response =>{
            setData(data.concat(response.data));
            OpenCLoseModalInsertar();
        }).catch(error=>{
            console.log(error);
          })
    }

    //Metodo PUT para editar una fila de la db
    const PutCarousel = async() =>{
        var form = new FormData();
        form.append("titulo", comunicadoSeleccionado.titulo );
        form.append("imagen",comunicadoSeleccionado.imagen);
        form.append("contenido",comunicadoSeleccionado.contenido);
        form.append("fecha",comunicadoSeleccionado.fecha);
        form.append("METHOD","PUT");
        //console.log(form);
        await axios.post(urls.comunicadosMain,form,{params: {id: Number(comunicadoSeleccionado.id) }})
        .then(response =>{
            var newData = data;
            newData.map(comunicado=>{
                if(comunicado.id === comunicadoSeleccionado.id){
                    comunicado.titulo = comunicadoSeleccionado.titulo;
                    comunicado.imagen = comunicadoSeleccionado.imagen;
                    comunicado.contenido = comunicadoSeleccionado.contenido;
                    comunicado.fecha = comunicadoSeleccionado.fecha;
                }
                return(null)
            });
            setData(newData);
            OpenCLoseModalEditar();
            
        }).catch(error=>{
            console.log(error);
          });
    }

    //borrar una fila de la db
    const DeleteCarousel=async()=>{
        var f = new FormData();
        f.append("METHOD", "DELETE");
        await axios.post(urls.comunicadosMain, f, {params: {id: Number(comunicadoSeleccionado.id) }})
        .then(response=>{
          setData(data.filter(comunicado=>comunicado.id!==comunicadoSeleccionado.id));
          OpenCLoseModalEliminar();
        }).catch(error=>{
          console.log(error);
        })
      }
    //convertir imagen a b64
    const HandleImageUpload = (archivos) =>{
        Array.from(archivos).forEach(archivo =>{
            var render = new FileReader()
            render.readAsDataURL(archivo)
            render.onload = function(){
                var base64 = render.result
                setComunicadoSeleccionado({
                    id:comunicadoSeleccionado.id,
                    titulo: comunicadoSeleccionado.titulo,
                    imagen:base64,
                    contenido:comunicadoSeleccionado.contenido,
                    fecha:comunicadoSeleccionado.fecha})
                    //console.log(comunicadoSeleccionado)
            }
        })
    }
    // se activa en el onclick de los botones eliminar y editar abriendo el modal
    //correspondiente
    const SeleccionarCarousel = (comunicado,caso)=>{
        setComunicadoSeleccionado(comunicado);
        (caso === "editar")?
        OpenCLoseModalEditar()
        :
        OpenCLoseModalEliminar()
    }

    //get en cuanto inicia la pagian
    useEffect(()=>{
        GetComunicados()
    },[])

    //render el cual retorna la lista de la db
    //botones de editar y eliminar y modal de agregar una nuevo comunicado del carrusel
    //NOTA: una cuadro de cada carrusel tiene 3 comunicados
    //El modal para editar
    //el modal para eliminar
    //es decir un crud basico
    return (
        <>
            <div className ="container text-center">
                <h1>Comunicados DIF Uruapan <button className = "btn btn-success m-5" onClick = {()=>OpenCLoseModalInsertar()}>Nuevo cominicado</button></h1>
                {data !== [] ?
                <>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Imagen</th>
                            <th>Contenido</th>
                            <th>fecha</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(comunicado =>(
                            <tr key = {"carrusel-dif" + comunicado.id}>
                                <td>{comunicado.titulo}</td>
                                <td><img width = "200" src ={comunicado.imagen} alt="" className = "image-fluid"/></td>
                                <td width = "200" className= "d-inline-block text-truncate">{comunicado.contenido}</td>
                                <td>{comunicado.fecha}</td>
                                <td>
                                    <button className = "btn btn-primary m-1" onClick ={()=>SeleccionarCarousel(comunicado,"editar")}>Editar</button>
                                    <button className = "btn btn-danger" onClick ={()=>SeleccionarCarousel(comunicado,"eliminar")}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal 
                show = {modalInsertar}
                onHide = {()=>OpenCLoseModalInsertar()}>
                    <Modal.Header closeButton>Nuevo Comunicado</Modal.Header>
                    <Modal.Body>
                        <div className = "form-group">
                            <label className = "form-label">Titulo</label>
                            <br/>
                            <input className = "form-control mb-3"type = "text" name = "titulo" onChange  = {HandleChange}></input>
                            <br/>
                            <label className = "form-label">Imagen</label>
                            <br/>
                            <input className = "form-control mb-3"type = "file" accept="image/png, image/jpeg" name = "imagen" onChange  = {(e)=> HandleImageUpload(e.target.files)}></input>
                            <br/>
                            <label className = "form-label">Contenido</label>
                            <br/>
                            <textarea rows = "4" className = "form-control mb-3"type = "text" name = "contenido" onChange  = {HandleChange}></textarea>
                            <br/>
                            <label className = "form-label">Fecha</label>
                            <br/>
                            <input className = "form-control mb-3"type = "date" name = "fecha" onChange  = {HandleChange}></input>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick = {()=>PostComunicados()} className ="btn btn-primary">Aceptar</button>
                        <button onClick = {()=>OpenCLoseModalInsertar()} className="btn btn-danger">Cancelar</button>
                    </Modal.Footer>
                </Modal>
                <Modal 
                show = {modalEditar}
                onHide = {()=>OpenCLoseModalEditar()}>
                    <Modal.Header closeButton>Editar Comunicado</Modal.Header>
                    <Modal.Body>
                        <div className = "form-group">
                            <label className = "form-label">Titulo</label>
                            <br/>
                            <input className = "form-control mb-3"type = "text" name = "titulo" onChange  = {HandleChange} value = {comunicadoSeleccionado && comunicadoSeleccionado.titulo}></input>
                            <br/>
                            <label className = "form-label">Imagen</label>
                            <br/>
                            <input className = "form-control mb-3"type = "file" accept="image/png, image/jpeg"  name = "imagen" onChange  = {(e)=> HandleImageUpload(e.target.files)}></input>
                            <br/>
                            <label className = "form-label">Contenido</label>
                            <br/>
                            <textarea rows = "4" className = "form-control mb-3"type = "text" name = "contenido" onChange  = {HandleChange}></textarea>
                            <br/>
                            <label className = "form-label">Fecha</label>
                            <br/>
                            <input className = "form-control mb-3"type = "date" name = "fecha" onChange  = {HandleChange}></input>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" onClick = {()=>PutCarousel()} className ="btn btn-primary">Editar</button>
                        <button onClick = {()=>OpenCLoseModalEditar()} className="btn btn-danger">Cancelar</button>
                    </Modal.Footer>
                </Modal>

                <Modal 
                show = {modalEliminar}
                onHide = {()=>OpenCLoseModalEliminar()}>
                    <Modal.Header closeButton>Eliminar Comunicado</Modal.Header>
                    <Modal.Body>
                        <div className = "text-center">
                            <p>¿Estás seguro que deseas eliminar el comunicado {comunicadoSeleccionado && comunicadoSeleccionado.titulo}?</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick = {()=>DeleteCarousel()} className ="btn btn-danger">Sí</button>
                        <button onClick = {()=>OpenCLoseModalEliminar()} className="btn btn-primary">No</button>
                    </Modal.Footer>
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

export default AdminComunicadosMain