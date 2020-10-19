import React from 'react';

import {Card} from 'react-bootstrap'

const RequestCard = (props) => {
    
    const requestToShow = props.request

    return (
        
        <div>
            
            <Card>
                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2440/7149/products/Solid_Blue-Gray_600x.jpg?v=1579880598" 
                    style={ {width: '100%', height: '5px', objectFit: 'cover'} }
                />
                <Card.Body>
                    <Card.Title>From: {requestToShow.name} - This is an individual request in reqcard</Card.Title>
                    
                        <ul>
                            <li>phone: {requestToShow.phone}</li>
                            <li>message: {requestToShow.message}</li>
                            
                            <li>sent: {requestToShow.updated_at}</li>
                            
                        </ul>
                      
                </Card.Body>
                <Card.Footer>
                    
                    
                    <small className="text-muted">footer</small><br></br>
                    
                </Card.Footer>
            </Card>
           
        </div>

    )

}


export default (RequestCard)