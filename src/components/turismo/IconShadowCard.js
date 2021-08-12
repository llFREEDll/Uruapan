import React from 'react'
import { Link } from 'react-router-dom'

//Componente que muestra una tarjeta con un icono a la izquierda
//y una descripcion a la derecha.
//y una shadow, se muestra en la pantalla de turismo
class IconShadowCard extends React.Component{
    render(){
        return(
                
            <Link to = {this.props.Link} className={this.props.clase}>
                <div className="row d-flex align-items-center ">
                    <div className="col-4">
                        <img src={this.props.img} className="float-right img-fluid" alt="..."/>
                    </div>
                    <div className="col-8 text-white">
                        <p>{this.props.p}</p>
                    </div>
                </div>
                    
            </Link>
        )
    }
}

export default IconShadowCard