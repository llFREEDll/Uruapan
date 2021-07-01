import React from 'react'

class ComunicadosCard extends React.Component {
    render(){
        return(
            <div className = "col">
                <div className="card border-0 bg-dark text-white">
                <div className = "inner">
                    <img src={this.props.img} className="ImageCardBg card-img" alt="..."/>
                </div>
                
                <div className="card-img-overlay">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="badge badgeColorPink">
                        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                            
                        </span>
  {this.props.uploadDate}</p>
                </div>
                </div>
            </div>
            
        )
    }
}
export default ComunicadosCard