import React from 'react'
import "jquery-ui/ui/effects/effect-size"
import { Link } from 'react-router-dom';

class IconCard extends React.Component{
    render(){
        return(
            <div className = "col animation1">
                
                <Link to ="/" className="card h-100 border-0  text-decoration-none text-dark" >
                    <div className="row d-flex align-items-center ">
                        <div className="col-4">
                        <img src={this.props.img} className="float-right img-fluid" alt="..."/>
                        </div>
                        <div className="col-8 ">
                            <p className={this.props.pClass}><small>{this.props.p}</small></p>
                        </div>
                    </div>
                    
                </Link>
                <hr className="dropdown-divider"></hr>
            </div>
        )
    }
}

export default IconCard