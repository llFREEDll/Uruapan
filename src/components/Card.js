import React from 'react'

class Card extends React.Component{
    render(){
        return(
            <div className="card border-0 text-center">
                <img src={this.props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.p}</p>
                </div>
            </div>
        )
    }
}

export default Card