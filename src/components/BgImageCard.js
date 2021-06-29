import React from 'react'

//<div class="card-img-overlay">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     <p class="card-text">Last updated 3 mins ago</p>
// </div>
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