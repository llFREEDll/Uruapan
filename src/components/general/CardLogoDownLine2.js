import React from 'react'
import '../../styles/CardLogoDownLine.css'
class CardLogoDownLine2 extends React.Component{
    render(){
        return(
            <div className = "container my-5">
                <div className = "col animation1">
                    <a target="_blank" rel= "noreferrer" href ={this.props.Link} className="card h-100 border-0 text-decoration-none text-dark" >
                        <div className="row d-flex align-items-center ">
                            <div className="col-4">
                            <img src={this.props.img} className="float-right img-fluid" alt="..."/>
                            </div>
                            <div className="col-8 ">
                                <p className = "pinkColor">{this.props.p}</p>
                            </div>
                        </div>
                    </a>
                    <div className = "DownLine"></div>
                </div>
            </div>
            
        )
    }
}

export default CardLogoDownLine2