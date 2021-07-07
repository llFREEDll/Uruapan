import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'

const Admin = () => {
    //URL del api de donde vamos a jalar la base de datos
    const baseURL = "http://localhost:801/uruapan-api"
    
    //url de la tabla que queremos usar 
    const jornadasURL = "/jornadas-table.php"
    
    //Manejadores del modal para insertar un nuevo objeto
    const [modalInsertar,setModalInsertar] = useState(false)

    //objeto para recibir los datos que se quieren agregar, modal insertar
    const [jornadaSeleccionada,SetJornadaSeleccionada] = useState({
        id:"",
        descripcion:"",
        imagen:""
    })
    
    //manejador para recibir los datos de entrada del usuario del modal insertar
    //cada que se escribe una letra se actualiza
    const HandleChange = e =>{
        const {name,value} = e.target
        SetJornadaSeleccionada((prevState)=>({
            ...prevState,
            [name]:value
        }))
        console.log(jornadaSeleccionada)
    }

    const OpenCLoseModal = ()=>{
        setModalInsertar(!modalInsertar)
    }
    //convertir imagen a b64
    const [b64,setB64] = useState([])

    const HandleImageUpload = (e) =>{
        setB64(e)
    }

    //Metodo get para obtener las jornadas de la DB
    const GetJornadas = async() =>{
        await axios.get(baseURL+jornadasURL)
        .then(response =>{
            setData(response.data)
        })
    }

    //Metodo POST para enviar una nueva Jornada a la DB
    const PostJornadas = async() =>{
        var form = new FormData();
        form.append("descripcion", jornadaSeleccionada.descripcion );
        form.append("imagen",b64);
        form.append("METHOD","POST");
        await axios.post(baseURL+jornadasURL,form,{headers:{'content-type':'multipart/form-data'}})
        .then(response =>{
            setData(data.concat(response.data));
            OpenCLoseModal();
        })
    }
    // almacenar los datos obtenidos del metodo get Jornadas
    const [data,setData] = useState([])
    useEffect(()=>{
        GetJornadas()
    },[])
    //reder el cual retorna la lista de la db
    //botones de editar y eliminar
    //El modal para editar
    //es decir un crud basico
    return (
        <>
            <div className ="container text-center">
                <button className = "btn btn-success m-5" onClick = {()=>OpenCLoseModal()}>Insertar</button>
                <table className ="table">
                    <thead>
                        <tr>
                            <th>Descripción</th>
                            <th>imagen</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(jornada =>(
                            <tr key = {jornada.id}>
                                <td>{jornada.descripcion}</td>
                                <td><img src ={jornada.imagen} alt="" className = "image-fluid"/></td>
                                <td>
                                    <button className = "btn btn-primary mr-1">Editar</button>
                                    <button className = "btn btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Modal 
                show = {modalInsertar}
                onHide = {()=>OpenCLoseModal()}>
                    <Modal.Header closeButton>Nuevo Comunicado</Modal.Header>
                    <Modal.Body>
                        <div className = "form-group">
                            <label className = "form-label">Descripción</label>
                            <br/>
                            <input className = "form-control mb-3"type = "text" name = "descripcion" onChange  = {HandleChange}></input>
                            <br/>
                            <label className = "form-label">Imagen</label>
                            <br/>
                            <input className = "form-control mb-3"type = "file" name = "imagen" onChange  = {(e)=> HandleImageUpload(e.target.file)}></input>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" onClick = {()=>PostJornadas()} className ="btn btn-primary">Enviar</button>
                        <button onClick = {()=>OpenCLoseModal()} className="btn btn-danger">Cancelar</button>
                    </Modal.Footer>
                </Modal>
            </div>
            
        </>
    )
}

export default Admin