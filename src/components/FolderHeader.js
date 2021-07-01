import React from 'react'
import '../styles/FolderHeader.css'

class FolderHeader extends React.Component{
    render(){
        return(
            <div>
                <div className = "shape d-flex align-items-center text-white fw-bold">
                    <p className = "ms-3 mb-0">{this.props.p}</p> </div>
                <div className = " shape2"></div>
                <div className = " shape3"></div>
            </div>
        )
    }
}

export default FolderHeader