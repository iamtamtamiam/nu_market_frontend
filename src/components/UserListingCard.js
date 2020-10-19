import React from 'react';

import {Link} from 'react-router-dom'

import {Card, Carousel} from 'react-bootstrap'
import PhotoForm from './PhotoForm'

const UserListingCard = (props) => {
   
    const attributesObj = props.listingAttr
   
    return (
        
        <div>
            
            <Card>
                
            {attributesObj.photos.length <= 0 &&
                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2440/7149/products/Solid_Blue-Gray_600x.jpg?v=1579880598" 
                    style={ {width: '100%', height: '200px', objectFit: 'fill'} }
                />
            }

            <Carousel> 
                {attributesObj.photos.length > 0 &&
                    attributesObj.photos.map(photo => { return (
                        <Carousel.Item key={photo.id}>
                            <img variant="top" src={photo.url} alt=""
                            style={ {width: '70%', height: '20rem', objectFit: 'contain', position: 'relative', margin:'auto'} }
                            />
                        </Carousel.Item>
                    
                        )
                    })
                }
            </Carousel> 

            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2440/7149/products/Solid_Blue-Gray_600x.jpg?v=1579880598" 
                style={ {width: '100%', height: '5px', objectFit: 'fill'} }
            />      

                <Card.Body>
                    <Card.Title>{attributesObj.item} </Card.Title>
                    
                        <ul>
                            <li>price: {attributesObj.price}</li>
                            <li>description: {attributesObj.description}</li>
                            
                            <li>condition: {attributesObj.condition}</li>
                            <li>status: {attributesObj.status}</li>
                            <li>zipcode: {attributesObj.zipcode}</li>
                            <li>contact: {attributesObj.contact}</li>
                        </ul>
                        <PhotoForm listingId={props.listingId} history={props.history}/>
                    
                </Card.Body>
                <Card.Footer>
                    
                    <Link exact="true" to={`/listings/${props.listingId}/requests`}>requests: {attributesObj.requests.length}</Link>
                    <br></br>
                    {(props.currentUser.id === props.listingSeller.data.id) ? (<Link to={`/listings/${props.listingId}/edit`}>Edit this listing</Link>) : "I am NOT seller" }
                </Card.Footer>
            </Card>
           
        </div>

    )


}

//<small className="text-muted">Buyer: {props.listingBuyer.data ? props.listingBuyer.data.id : "no buyer" }</small><br></br>

export default (UserListingCard)