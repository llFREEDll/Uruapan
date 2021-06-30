import React from 'react'
import $ from "jquery";
import "jquery-ui/ui/effects/effect-size"
import { Link } from 'react-router-dom';

class IconCard extends React.Component{
    componentDidMount(){
        // var options = { to: { width: 200, height: 60 } };
        // $( ".size" ).hover(
        // ()=>{
        //     $( ".size" ).animate({fontsize})
        // }   ,()=>{
        //     options = { to: { width: 200, height: 60 } };
        //     $( ".size" ).effect( "size", options, 500 );
        // } 
        // ) 
    }
    render(){
        return(
            <div className = "col">
                <Link to ="/" className="card border-0 animation1 text-decoration-none text-dark" >
                    <div className="row d-flex align-items-center ">
                        <div className="col-4">
                        <img src={this.props.img} className="float-right img-fluid" alt="..."/>
                        </div>
                        <div className="col-8 ">
                            <p className={this.props.pClass}><small>{this.props.p}</small></p>
                            
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default IconCard