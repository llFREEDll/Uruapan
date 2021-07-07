import React from 'react'

//Tarjeta diseñada para usarse de manera general
//se despliega en varias pantallas
//es una targeta un una imagen en top, una descripcion
// y un link a una vista de la aplicacion web
//animada con css
class Card extends React.Component{
    render(){
        return(
            <div className="card border-0 text-center">
                <div className = "inner">
                    <img src={this.props.img} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.p}</p>
                </div>
            </div>
        )
    }
}

export default Card