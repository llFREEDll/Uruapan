import React from 'react'
import Modal from 'react-bootstrap/Modal';

//Tarjeta que se despliega en /dif-uruapan
//muestra una imagangen con un box shadow
//generado con bootstrap
//on click muestra un modal con la imagen seleccionada

class JornadaCard extends React.Component{

  //Estado y manejador del modal
  state = {
    show : false
  }
  HandleModal(){
    this.setState({show:!this.state.show})
  }
  render(){
    return(
        <>
          <a href = "#a"  className = "col mt-5  d-flex align-items-center" onClick = {()=>{this.HandleModal()}}>
            <div className="card shadow bg-body p-0 rounded border-0 ">
                  <img src = {this.props.img}  className=" img-fluid" alt="..."/>
            </div>
          </a>
          <Modal show = {this.state.show} onHide = {()=>this.HandleModal()}>
            <Modal.Header closeButton>
              <Modal.Title>INFORMACIÓN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src = {this.props.img} className=" img-fluid" alt="..."/>
            </Modal.Body>
          </Modal>
        </>
        
    )
  }  
}

export default JornadaCard