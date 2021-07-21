import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import {urls} from '../../apiConection/Links'
import { Spinner } from 'react-bootstrap';

const AdminCarouselDif = () => {
    // estados 
    //datos recibidos de la base de datos 
    const [data,setData] = useState([])
    //manejadores para mostrar y ocultar los modales
    const [modalInsertar,setModalInsertar] = useState(false)
    const [modalEditar,setModalEditar] = useState(false)
    const [modalEliminar, setModalEliminar]= useState(false);

    //objeto para identificar con cual item de la lista estamos
    //trabajando de manera especifica
    const [itemSeleccionado,setitemSeleccionado] = useState({
        id:0,
        titulo:"",
        imagen:""
    })
    
    //manejador para recibir los datos de entrada del usuario del modal insertar
    //cada que se escribe una letra se actualiza
    const HandleChange = e =>{
        const {name,value} = e.target
        setitemSeleccionado((prevState)=>({
            ...prevState,
            [name]:value
        }))
        //console.log(itemSeleccionado)
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

    //Metodo get para obtener los items de la DB
    const GetItems = async() =>{
        await axios.get(urls.carouselDif)
        .then(response =>{
            setData(response.data)
        }).catch(error=>{
            console.log(error);
          })
    }

    //Metodo POST para enviar un nuevo item a la DB
    const PostCarousel = async() =>{
        var form = new FormData();
        form.append("titulo", itemSeleccionado.titulo );
        form.append("imagen",itemSeleccionado.imagen);
        form.append("METHOD","POST");
        await axios.post(urls.carouselDif,form,{headers:{'content-type':'multipart/form-data'}})
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
        form.append("titulo", itemSeleccionado.titulo );
        form.append("imagen",itemSeleccionado.imagen);
        form.append("METHOD","PUT");
        //console.log(form);
        await axios.post(urls.carouselDif,form,{params: {id: Number(itemSeleccionado.id) }})
        .then(response =>{
            var newData = data;
            newData.map(item=>{
                if(item.id === itemSeleccionado.id){
                    item.titulo = itemSeleccionado.titulo;
                    item.imagen = itemSeleccionado.imagen;
                }
                return null
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
        await axios.post(urls.carouselDif, f, {params: {id: Number(itemSeleccionado.id) }})
        .then(response=>{
          setData(data.filter(item=>item.id!==itemSeleccionado.id));
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
                setitemSeleccionado({
                    id:itemSeleccionado.id,
                    titulo: itemSeleccionado.titulo,
                    imagen:base64})
                    //console.log(itemSeleccionado)
            }
        })
    }
    // se activa en el onclick de los botones eliminar y editar abriendo el modal
    //correspondiente
    const SeleccionarCarousel = (item,caso)=>{
        setitemSeleccionado(item);
        (caso === "editar")?
        OpenCLoseModalEditar()
        :
        OpenCLoseModalEliminar()
    }

    //get en cuanto inicia la pagian
    useEffect(()=>{
        GetItems()
    },[])

    //render el cual retorna la lista de la db
    //botones de editar y eliminar y modal de agregar una nuevo item del carrusel
    //NOTA: una cuadro de cada carrusel tiene 3 items
    //El modal para editar
    //el modal para eliminar
    //es decir un crud basico
    return (
        <>
            <div className ="container text-center">
                <h1>Carrusel DIF Uruapan <button className = "btn btn-success m-5" onClick = {()=>OpenCLoseModalInsertar()}>Nueva Imagen de Carrusel</button></h1>
                {data !== [] ?
                <>
                <table className ="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Imagen</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item =>(
                            <tr key = {"carrusel-dif" + item.id}>
                                <td>{item.titulo}</td>
                                <td><img width = "200" src ={item.imagen} alt="" className = "image-fluid"/></td>
                                <td>
                                    <button className = "btn btn-primary m-1" onClick ={()=>SeleccionarCarousel(item,"editar")}>Editar</button>
                                    <button className = "btn btn-danger" onClick ={()=>SeleccionarCarousel(item,"eliminar")}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Modal 
                show = {modalInsertar}
                onHide = {()=>OpenCLoseModalInsertar()}>
                    <Modal.Header closeButton>Nueva imagen de carrusel</Modal.Header>
                    <Modal.Body>
                        <div className = "form-group">
                            <label className = "form-label">Título</label>
                            <br/>
                            <input className = "form-control mb-3"type = "text" name = "titulo" onChange  = {HandleChange}></input>
                            <br/>
                            <label className = "form-label">Imagen</label>
                            <br/>
                            <input className = "form-control mb-3"type = "file" name = "imagen" onChange  = {(e)=> HandleImageUpload(e.target.files)}></input>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick = {()=>PostCarousel()} className ="btn btn-primary">Aceptar</button>
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
                            <input className = "form-control mb-3"type = "text" name = "titulo" onChange  = {HandleChange} value = {itemSeleccionado && itemSeleccionado.titulo}></input>
                            <br/>
                            <label className = "form-label">Imagen</label>
                            <br/>
                            <input className = "form-control mb-3"type = "file" name = "imagen" onChange  = {(e)=> HandleImageUpload(e.target.files)}></input>
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
                            <p>¿Estás seguro que deseas eliminar la item {itemSeleccionado && itemSeleccionado.titulo}?</p>
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

export default AdminCarouselDif