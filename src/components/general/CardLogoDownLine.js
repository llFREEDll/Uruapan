import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/CardLogoDownLine.css'
class CardLogoDownLine extends React.Component{
    render(){
        return(
                <div className = "col animation1">
                    <Link to ={this.props.Link} className="card h-100 border-0 text-decoration-none text-dark" >
                        <div className="row d-flex align-items-center ">
                            <div className="col-4">
                            <img src={this.props.img} className="float-right img-fluid" alt="..."/>
                            </div>
                            <div className="col-8 ">
                                <p className = "pinkColor">{this.props.p}</p>
                            </div>
                        </div>
                    </Link>
                    <div className = "DownLine"></div>
                </div>
            
        )
    }
}

export default CardLogoDownLine