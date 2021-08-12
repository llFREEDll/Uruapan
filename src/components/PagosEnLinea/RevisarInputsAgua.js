import React from 'react'

class RevisarInputsAgua extends React.Component{
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
                    Campo domicilio vacío
                </div>
                :                                    
                <></>
            }
            {this.props.datosIngresados.toma === "" && this.props.error.toma  ?
                <div className = "alert alert-danger">
                    Campo No. de toma vacío
                </div>
                :                                    
                <></>
            }{this.props.datosIngresados.toma === "tomaError" && this.props.error.toma  ?
            <div className = "alert alert-danger">
                La toma tiene que ser un número de 6 dígitos
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
            {this.props.datosIngresados.zona === "" && this.props.error.zona  ?
                <div className = "alert alert-danger">
                    Campo zona vacío
                </div>
                :                                    
                <></>
            }
            {this.props.datosIngresados.monto === "" && this.props.error.monto ?
                <div className = "alert alert-danger">
                    Campo monto vacío
                </div>
                :                                    
                <></>
            }
            
        </>
    )
    }
}

export default RevisarInputsAgua