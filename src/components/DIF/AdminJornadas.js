import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import {urls} from '../../apiConection/Links'
import { Spinner, Table } from 'react-bootstrap';

const AdminJornadas = () => {
    // estados 
    //datos recibidos de la base de datos 
    const [data,setData] = useState([])
    //manejadores para mostrar y ocultar los modales
    const [modalInsertar,setModalInsertar] = useState(false)
    const [modalEditar,setModalEditar] = useState(false)
    const [modalEliminar, setModalEliminar]= useState(false);
    const [modalEliminarSlider, setModalEliminarSlider]= useState(false);

    //controlador para cada una de las imagenes
    const [img,setImg] = useState({
        id: 0,
        imagen: "",
        descripcion: ""
    })
    //objeto para identificar con cual jornada de la lista estamos
    //trabajando, que slider es, cada slider contiene 3 imagenes
    const [jornadaSeleccionada,setJornadaSeleccionada] = useState({
        id:0,
        descripcion1:"",
        imagen1:"",
        descripcion2:"",
        imagen2:"",
        descripcion3:"",
        imagen3:""

    })
    
    //manejador para recibir los datos de entrada del usuario del modal insertar
    //cada que se escribe una letra se actualiza
    const HandleChange = e =>{
        const {name,value} = e.target
        setJornadaSeleccionada((prevState)=>({
            ...prevState,
            [name]:value
        }))
        //console.log(jornadaSeleccionada)
    }

    const HandleChangeDescripcion = (event,i) =>{
        setImg((prevState)=>({
            ...prevState,
            descripcion:event.target.value
        }))
        setJornadaSeleccionada(
            prevState => {
                if(i ===1)
                return { ...prevState,
                             imagen1:{
                                id: jornadaSeleccionada.imagen1.id,
                                descripcion:event.target.value,
                                imagen: jornadaSeleccionada.imagen1.imagen
                            }  }
                else if(i ===2)
                return { ...prevState,
                             imagen2:{
                                id: jornadaSeleccionada.imagen2.id,
                                descripcion:event.target.value,
                                imagen: jornadaSeleccionada.imagen2.imagen
                            }  }
                else if(i ===3)
                return { ...prevState,
                             imagen3:{
                                    id: jornadaSeleccionada.imagen3.id,
                                    descripcion:event.target.value,
                                    imagen: jornadaSeleccionada.imagen3.imagen
                            }  }
            })

    }
    //se activan en el on click de los botones
    //insertar, eliminar, editar correspondientemente
    const OpenCLoseModalInsertar = ()=>{
        setModalInsertar(!modalInsertar)
        setJornadaSeleccionada({
            id:0,
            descripcion1:"",
            imagen1:"",
            descripcion2:"",
            imagen2:"",
            descripcion3:"",
            imagen3:""
    
        })
    }
    const OpenCLoseModalEliminar = ()=>{
        setModalEliminar(!modalEliminar)
    }
    const OpenCLoseModalEliminarSlider = ()=>{
        setModalEliminarSlider(!modalEliminarSlider)
    }
    const OpenCLoseModalEditar = ()=>{
        setModalEditar(!modalEditar)
    }

    //Metodo get para obtener las jornadas de la DB
    const GetJornadas = async() =>{
        await axios.get(urls.jornadasDif)
        .then(response =>{
            setData(response.data)
        }).catch(error=>{
            console.log(error);
          })

    }

    //Metodo POST para enviar una nueva Jornada a la DB
    const PostJornadas = async() =>{
        var form = new FormData();
        console.log(jornadaSeleccionada)
        form.append("descripcion1", jornadaSeleccionada.descripcion1 );
        form.append("imagen1",jornadaSeleccionada.imagen1);
        form.append("descripcion2", jornadaSeleccionada.descripcion2 );
        form.append("imagen2",jornadaSeleccionada.imagen2);
        form.append("descripcion3", jornadaSeleccionada.descripcion3 );
        form.append("imagen3",jornadaSeleccionada.imagen3);
        form.append("METHOD","POST");
        await axios.post(urls.jornadasDif,form,{headers:{'content-type':'multipart/form-data'}})
        .then(response =>{
            GetJornadas()
            OpenCLoseModalInsertar();
        }).catch(error=>{
            console.log(error);
          })
    }

    //Metodo PUT para editar una fila de la db
    const PutJornadas = async(jornada,imagenNumero) =>{
        
        let aux = "" 
        if(imagenNumero === 1){
            aux = jornada.imagen1.id
            setImg(
                prevState => {
                    return { id: aux ,...prevState}
                  });
        }
        else    
        if(imagenNumero === 2){
            aux = jornada.imagen2.id
            setImg(
                prevState => {
                    return { id: aux ,...prevState}
                  });
        }
            
        else
        if(imagenNumero === 3){
            aux = jornada.imagen3.id
            setImg(
                prevState => {
                    return { id: aux ,...prevState}
                  });
        }  
        console.log(jornada);
        var form = new FormData();
        form.append("descripcion", img.descripcion );
        form.append("imagen",img.imagen);
        form.append("METHOD","PUT");
        
        await axios.post(urls.imagenJornadasDif,form,{params: {id: Number(aux) }})
        .then(response =>{
            var newData = data;
            //console.log(response.data)
            newData.map(jornada=>{
                if(jornada.imagen1.id === aux){
                    jornada.imagen1 = img;
                }else
                if(jornada.imagen2.id === aux){
                    jornada.imagen2 = img;
                }else
                if(jornada.imagen3.id === aux){
                    jornada.imagen3 = img;
                }
                return null
            });
            setData(newData);
            OpenCLoseModalEditar();
        }).catch(error=>{
            console.log(error);
          });
    }

    // borrar un slider de la db, ESTO BORRA 3 JORNADAS DE UNA 
    const DeleteSlider = async() => {
        var f = new FormData();
        f.append("METHOD", "DELETE");
        await axios.post(urls.jornadasDif, f, {params: {id: Number(jornadaSeleccionada.id) }})
        .then(response=>{
          setData(data.filter(jornada=>jornada.id!==jornadaSeleccionada.id));
          OpenCLoseModalEliminarSlider();
        }).catch(error=>{
          console.log(error);
        })
      }


    //borrar una imagen de la db jornadas
    const ConfirmarElimancion = (jornada,imagenNumero)=>{
        if(imagenNumero === 1)
            setImg(
                prevState => {
                    return { ...prevState, id: jornada.imagen1.id }
                });
        if(imagenNumero === 2)
            setImg(
                prevState => {
                    return { ...prevState, id: jornada.imagen2.id }
                });
        if(imagenNumero === 3)
            setImg(
                prevState => {
                    return { ...prevState, id: jornada.imagen3.id }
                });
        OpenCLoseModalEliminar();
    }
    const DeleteJornadas=async()=>{
        var form = new FormData();
        form.append("descripcion", "" );
        form.append("imagen","");
        form.append("METHOD","PUT");
        
        await axios.post(urls.imagenJornadasDif,form,{params: {id: Number(img.id) }})
        .then(response =>{
            var newData = data;
            //console.log(response.data)
            newData.map(jornada=>{
                if(jornada.imagen1.id === img.id){
                    jornada.imagen1 = img;
                }else
                if(jornada.imagen2.id === img.id){
                    jornada.imagen2 = img;
                }else
                if(jornada.imagen3.id === img.id){
                    jornada.imagen3 = img;
                }
                return null
            });
            setData(newData);
            OpenCLoseModalEliminar();
            OpenCLoseModalEditar();
        }).catch(error=>{
            console.log(error);
          });
      }
    //convertir imagen a b64
    const HandleImageUpload = (archivos,i) =>{
        Array.from(archivos).forEach(archivo =>{
            var render = new FileReader()
            render.readAsDataURL(archivo)
            render.onload = function(){
                var base64 = render.result
                if(i === 1)
                setJornadaSeleccionada({
                    id:jornadaSeleccionada.id,
                    descripcion1: jornadaSeleccionada.descripcion1,
                    imagen1:base64,
                    descripcion2: jornadaSeleccionada.descripcion2,
                    imagen2:jornadaSeleccionada.imagen2,
                    descripcion3: jornadaSeleccionada.descripcion3,
                    imagen3:jornadaSeleccionada.imagen3
                })
                if(i === 2)
                setJornadaSeleccionada({
                    id:jornadaSeleccionada.id,
                    descripcion1: jornadaSeleccionada.descripcion1,
                    imagen1:jornadaSeleccionada.imagen1,
                    descripcion2: jornadaSeleccionada.descripcion2,
                    imagen2:base64,
                    descripcion3: jornadaSeleccionada.descripcion3,
                    imagen3:jornadaSeleccionada.imagen3
                })
                if(i === 3)
                setJornadaSeleccionada({
                    id:jornadaSeleccionada.id,
                    descripcion1: jornadaSeleccionada.descripcion1,
                    imagen1:jornadaSeleccionada.imagen1,
                    descripcion2: jornadaSeleccionada.descripcion2,
                    imagen2:jornadaSeleccionada.imagen2,
                    descripcion3: jornadaSeleccionada.descripcion3,
                    imagen3:base64
                })
                    //console.log(jornadaSeleccionada)
            }
        })
    }
    const HandleJornadaImage = (archivos)=>{
        Array.from(archivos).forEach(archivo =>{
            var render = new FileReader()
            render.readAsDataURL(archivo)
            render.onload = function(){
                var base64 = render.result
                //console.log(base64)
                setImg(
                    prevState => {
                        return { ...prevState,imagen: base64 }
                      });
                //console.log(img)
            }
        })
    }
    // se activa en el onclick de los botones eliminar y editar abriendo el modal
    //correspondiente
    const SeleccionarJornada = (jornada,caso)=>{
        setJornadaSeleccionada(jornada);
        (caso === "editar")?
        OpenCLoseModalEditar()
        :
        OpenCLoseModalEliminarSlider()
    }

    //get en cuanto inicia la pagian
    useEffect(()=>{
        GetJornadas()
    },[])

    //render el cual retorna la lista de la db
    //botones de editar y eliminar y modal de agregar una nueva jornada
    //El modal para editar
    //el modal para eliminar
    //es decir un crud basico
    return (
        <>
            
                
            <div className ="container text-center">
                <h1>Jornadas <button className = "btn btn-success m-5" onClick = {()=>OpenCLoseModalInsertar()}>Nueva Jornada</button></h1>
                {data !== [] ?
                <>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Slider</th>
                            <th>Imagen</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((jornada,index) =>(
                            
                            <tr key = {"jornada" + jornada.id}>
                                <td>{index + 1}</td>
                                <td>
                                    {jornada.imagen1.imagen !== ""?
                                    <img width = "200" src ={jornada.imagen1.imagen} alt="" className = "image-fluid"/>
                                    :
                                    <p>Imagen 1<br/> (vacia)</p>
                                    }
                                    <br/>
                                    {jornada.imagen2.imagen !== ""?
                                    <img width = "200" src ={jornada.imagen2.imagen} alt="" className = "image-fluid"/>
                                    :
                                    <p>Imagen 2<br/> (vacia)</p>
                                    }
                                    
                                    <br/>
                                    {jornada.imagen3.imagen !== ""?
                                    <img width = "200" src ={jornada.imagen3.imagen} alt="" className = "image-fluid"/>
                                    :
                                    <p>Imagen 3<br/> (vacia)</p>
                                    }
                                    
                                </td>
                                <td>
                                    <button className = "btn btn-primary m-1" onClick ={()=>SeleccionarJornada(jornada,"editar")}>Editar</button>
                                    <button className = "btn btn-danger m-1" onClick ={()=>SeleccionarJornada(jornada,"eliminar")}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal 
                show = {modalInsertar}
                onHide = {()=>OpenCLoseModalInsertar()}>
                    <Modal.Header closeButton>Nuevo slider de jornadas</Modal.Header>
                    <Modal.Body>
                        <div className = "form-group">
                            <label className = "form-label">Descripción</label>
                            <br/>
                            <input className = "form-control mb-3"type = "text" name = "descripcion1" onChange  = {HandleChange}></input>
                            <br/>
                            <label className = "form-label">Imagen</label>
                            <br/>
                            <input className = "form-control mb-3"type = "file" accept="image/png, image/jpeg" name = "imagen1" onChange  = {(e)=> HandleImageUpload(e.target.files,1)}></input>
                        </div>
                        <hr className = "dropdown-divider"/>
                        <hr className = "dropdown-divider"/>
                        <div className = "form-group">
                            <label className = "form-label">Descripción</label>
                            <br/>
                            <input className = "form-control mb-3"type = "text" name = "descripcion2" onChange  = {HandleChange}></input>
                            <br/>
                            <label className = "form-label">Imagen</label>
                            <br/>
                            <input className = "form-control mb-3"type = "file" accept="image/png, image/jpeg" name = "imagen2" onChange  = {(e)=> HandleImageUpload(e.target.files,2)}></input>
                        </div>
                        <hr className = "dropdown-divider"/>
                        <hr className = "dropdown-divider"/>
                        <div className = "form-group">
                            <label className = "form-label">Descripción</label>
                            <br/>
                            <input className = "form-control mb-3"type = "text" name = "descripcion3" onChange  = {HandleChange}></input>
                            <br/>
                            <label className = "form-label">Imagen</label>
                            <br/>
                            <input className = "form-control mb-3"type = "file"  accept="image/png, image/jpeg" name = "imagen3" onChange  = {(e)=> HandleImageUpload(e.target.files,3)}></input>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick = {()=>PostJornadas()} className ="btn btn-primary">Aceptar</button>
                        <button onClick = {()=>OpenCLoseModalInsertar()} className="btn btn-danger">Cancelar</button>
                    </Modal.Footer>
                </Modal>
                <Modal 
                show = {modalEditar}
                onHide = {()=>OpenCLoseModalEditar()}>
                    <Modal.Header closeButton>Editar slider de jornadas</Modal.Header>
                    <Modal.Body>
                        <div className = "form-group">
                            <p>Imagen 1</p>
                            <label className = "form-label">Descripción</label>
                            <br/>                            
                            <input className = "form-control mb-3"type = "text" name = "descripcion1" onChange  = {(e)=>HandleChangeDescripcion(e,1)} value = {jornadaSeleccionada && jornadaSeleccionada.imagen1.descripcion}></input>
                            <br/>
                            <label className = "form-label">Imagen</label>
                            <br/>
                            <input className = "form-control mb-3"type = "file" accept="image/png, image/jpeg" name = "imagen1" onChange  = {(e)=> HandleJornadaImage(e.target.files)}></input>                            
                            <div className = "text-center">
                            <button className = "btn btn-primary m-1" onClick = {()=>PutJornadas(jornadaSeleccionada,1)}>Actualizar</button>
                            <button className = "btn btn-danger m-1" onClick ={()=>ConfirmarElimancion(jornadaSeleccionada,1)}>Eliminar</button>
                            </div>
                            
                            <hr className = "dropdown-divider"/>
                        </div>
                        <div className = "form-group">
                            <p>Imagen 2</p>
                            <label className = "form-label">Descripción</label>
                            <br/>
                            <input className = "form-control mb-3"type = "text" name = "descripcion2" onChange  = {(e)=>HandleChangeDescripcion(e,2)} value = {jornadaSeleccionada && jornadaSeleccionada.imagen2.descripcion}></input>                            
                            <br/>
                            <label className = "form-label">Imagen</label>
                            <br/>
                            <input className = "form-control mb-3"type = "file" accept="image/png, image/jpeg" name = "imagen2" onChange  = {(e)=> HandleJornadaImage(e.target.files)}></input>
                            <div className = "text-center">
                            <button className = "btn btn-primary m-1" onClick ={()=>PutJornadas(jornadaSeleccionada,2)}>Actualizar</button>
                            <button className = "btn btn-danger m-1" onClick ={()=>ConfirmarElimancion(jornadaSeleccionada,2)}>Eliminar</button>
                            </div>
                            
                            <hr className = "dropdown-divider"/>
                        </div>
                        <div className = "form-group">
                            <p>Imagen 3</p>
                            <label className = "form-label">Descripción</label>
                            <br/>
                            <input className = "form-control mb-3"type = "text" name = "descripcion3" onChange  = {(e)=>HandleChangeDescripcion(e,3)} value = {jornadaSeleccionada && jornadaSeleccionada.imagen3.descripcion}></input>
                            <br/>
                            <label className = "form-label">Imagen</label>
                            <br/>
                            <input className = "form-control mb-3"type = "file" accept="image/png, image/jpeg" name = "imagen3" onChange  = {(e)=> HandleJornadaImage(e.target.files)}></input>
                            <div className = "text-center">
                            <button className = "btn btn-primary m-1" onClick ={()=>PutJornadas(jornadaSeleccionada,3)}>Actualizar</button>
                            <button className = "btn btn-danger m-1" onClick ={()=>ConfirmarElimancion(jornadaSeleccionada,3)}>Eliminar</button>
                            </div>
                            
                            <hr className = "dropdown-divider"/>
                            
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        
                        <button onClick = {()=>OpenCLoseModalEditar()} className="btn btn-danger">Cerrar</button>
                    </Modal.Footer>
                </Modal>

                <Modal 
                show = {modalEliminar}
                onHide = {()=>OpenCLoseModalEliminar()}>
                    <Modal.Header closeButton>Eliminar Jornada</Modal.Header>
                    <Modal.Body>
                        <div className = "text-center">
                            <p>¿Estás seguro que deseas eliminar la jornada {jornadaSeleccionada && img.descripcion}?</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick = {()=>DeleteJornadas()} className ="btn btn-danger">Sí</button>
                        <button onClick = {()=>OpenCLoseModalEliminar()} className="btn btn-primary">No</button>
                    </Modal.Footer>
                </Modal>
                <Modal 
                show = {modalEliminarSlider}
                onHide = {()=>OpenCLoseModalEliminarSlider()}>
                    <Modal.Header closeButton>Eliminar Slider</Modal.Header>
                    <Modal.Body>
                        <div className = "text-center">
                            <p>¿Estás seguro que deseas eliminar estas 3 jornadas?</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick = {()=>DeleteSlider()} className ="btn btn-danger">Sí</button>
                        <button onClick = {()=>OpenCLoseModalEliminarSlider()} className="btn btn-primary">No</button>
                    </Modal.Footer>
                </Modal>
                </>
                :
                <div className = "text-center mt-4">
                    <Spinner animation="grow" variant="success" />
                </div>}    
            </div>
        </>
    )
}

export default AdminJornadas