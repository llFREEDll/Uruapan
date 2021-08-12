import React from 'react'

class RevisarInputsMultas extends React.Component{
    render(){
    return(
        <>
        {this.props.datosIngresados.name === "" && this.props.error.name  ?
                <div  className = "alert alert-danger">
                    Campo nombre vacío
                </div>
                :                                    
                <></>
            }
            {this.props.datosIngresados.address === "" && this.props.error.address  ?
                <div className = "alert alert-danger">
                    Campo dirección vacío
                </div>
                :                                    
                <></>
            }
            {this.props.datosIngresados.email === "" && this.props.error.email  ?
                <div className = "alert alert-danger">
                    Campo correo electrónico vacío
                </div>
                :                                    
                <></>
            }{this.props.datosIngresados.email === "emailError" && this.props.error.email  ?
            <div className = "alert alert-danger">
                Ingresa un correo electronico valido
            </div>
            :                                    
            <></>
        }
            {this.props.datosIngresados.folio === "" && this.props.error.folio  ?
                <div className = "alert alert-danger">
                    Campo No. De folio vacío
                </div>
                :                                    
                <></>
            }
            {this.props.datosIngresados.fechaaplicacion === "" && this.props.error.fechaaplicacion  ?
                <div className = "alert alert-danger">
                    Campo fecha de aplicación vacío
                </div>
                :                                    
                <></>
            }
            
            {this.props.datosIngresados.descripcion === "" && this.props.error.descripcion  ?
                <div className = "alert alert-danger">
                    Campo descripción vacío
                </div>
                :                                    
                <></>
            }
            {this.props.datosIngresados.amount === "" && this.props.error.amount  ?
                <div className = "alert alert-danger">
                    Campo total a pagar vacío
                </div>
                :                                    
                <></>
            }
            {this.props.datosIngresados.amount === "amountError" && this.props.error.amount  ?
                <div className = "alert alert-danger">
                    Ingresa un monto valido
                </div>
                :                                    
                <></>
            }
            
        </>
    )
    }
}

export default RevisarInputsMultas