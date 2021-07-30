import React from 'react'
import { Card, Col } from 'react-bootstrap'

class CardImageTop extends React.Component{

    render(){
        return (
            <Col >
                <a  className = "text-dark fw-bold text-uppercase text-decoration-none" href={this.props.Link}>
                    <Card className = "shadow p-3 mb-5 bg-body rounded">
                        <Card.Img  variant="top" src={this.props.img}/>
                        <Card.Body>
                            <Card.Text>
                                
                                {this.props.p}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        )
    }
}

export default CardImageTop