import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'


//tarjeta de comunicados la cual despliega un modal on click
//tiene un fondo con opacidad genrado con css
//el modal es generado con react-bootstrap 
//la tarjeta es generada con bootstrap y css

class ComunicadosCard extends React.Component {
    //el stado "show" es el manejador del modal
    state = {
        show : false
      }
      HandleModal(){
        this.setState({show:!this.state.show})
      }
    render(){
        return(
            <>
            <div className = "col">
                <Link to = "#"  onClick = {()=>{this.HandleModal()}} className="card border-0 bg-dark text-white">
                    <div className = "inner">
                        <img src={this.props.img} className="ImageCardBg card-img" alt="..."/>
                    </div>
                    
                    <div className="card-img-overlay">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="badge badgeColorPink">
                            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">    
                            </span>
                            {this.props.uploadDate}
                        </p>
                    </div>
                </Link>
            </div>
            <Modal
            size = "xl"
            show = {this.state.show} 
            onHide = {()=>this.HandleModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>Comunicado</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <div className = "container text-center">
                        
                            <h2>{this.props.title}</h2>
                            <img src={this.props.img} className="card-img" alt="..."/>
                            <br/>
                            <br/>
                            <h6 className = "float-right mr-5">{this.props.uploadDate} </h6>
                            <br/>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            <button onClick = {()=>this.HandleModal()}  className = "btn text-white yellowColor btn" to = "/comunicados"> Cerrar </button> 
                        </div>
                        
                    </Modal.Body>
            </Modal>
          </>
            
        )
    }
}
export default ComunicadosCard