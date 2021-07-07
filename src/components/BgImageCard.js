import React from 'react'

//tarjeta diseñada para el apartado de servicos externos
//despliega una tarjeta con un fondo el cual representa
//cada uno de los servicos externos
//como capasu, implan, pago de predial, entre otros
class BgImageCard extends React.Component{
    render(){
        return(
            <div className = "col p-4">
                <div className = "card shadow m-2 bg-body rounded d-flex align-items-center">
                    <a href = {this.props.Link} className="card border-0" >
                        <img src= {this.props.img} className="card-img"  alt="..."/>                
                    </a>
                </div>
            </div>
        )
    }
}
export default BgImageCard