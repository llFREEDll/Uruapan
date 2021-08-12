import React from 'react'
import Modal from 'react-bootstrap/Modal'
//Tarjeta diseñada para usarse de manera general
//se despliega en varias pantallas
//es una targeta un una imagen en top, una descripcion
// y un link a una vista de la aplicacion web
//animada con css
class CardAndModal extends React.Component{
    state = {
        modal:false
    }
    OpenCLoseModal = ()=>{
        this.setState({modal : !this.state.modal})
    }
    render(){
        return(
            <div onClick = {()=>this.OpenCLoseModal()} className="card border-0 text-center">
                <div className = "inner">
                    <img src={this.props.img} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.p}</p>
                </div>
                <Modal 
                size= "xl"
                show = {this.state.modal}
                onHide = {()=>this.OpenCLoseModal()}>
                    <Modal.Header closeButton>{this.props.title}</Modal.Header>
                    <Modal.Body>
                        <div className = "text-center">
                        <p>{this.props.p2}</p>
                        <img src={this.props.img} className="img-fluid  " alt="..."/>
                        
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className = "text-center">
                            <h3 className = "my-5">Ubicación</h3>
                            <iframe className = "mb-5" title = {this.props.title} src={this.props.link} width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
                            <button onClick = {()=>this.OpenCLoseModal()} className="btn btn-danger">Cerrar</button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

export default CardAndModal