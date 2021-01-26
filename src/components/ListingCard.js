import React from 'react';

import {Link} from 'react-router-dom';

import {Card, Accordion} from 'react-bootstrap'

import RequestForm from './RequestForm'
// import LikeForm from './LikeForm'

const ListingCard = (props) => {
   
    const listingAttr = props.listing.attributes

    while (props.listing === "") { return (<div>loading</div>)}

    return (

        <div>
            <Card>

            {listingAttr.photos.length > 0 &&
            
            <Card.Img variant="top" src={listingAttr["photos"][0]["url"]} 
            style={ {width: '100%', height: '100%', objectFit: 'scale-down'} }
            />

            }

            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2440/7149/products/Solid_Blue-Gray_600x.jpg?v=1579880598" 
                    style={ {width: '100%', height: '5px', objectFit: 'fill'} }
                />      
                 
                <Card.Body
                    
                >
                    <Card.Title><Link key={props.listing.id}  to={`/listings/${props.listing.id}`}><h2>{listingAttr.item}</h2></Link></Card.Title>
                    <Card.Text>
                        ${listingAttr.price} - {listingAttr.condition}<br></br>
                        {listingAttr.zipcode}
                    </Card.Text>

                {/*   <LikeForm/> */}
                    
                </Card.Body>
                <Card.Footer>

                    {(props.currentUser.id === props.listing.relationships.seller.data.id) ? "you are the seller" : 
                        <Accordion >
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Click Here to Send a Request!
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <RequestForm {...props}/>
                            </Accordion.Collapse>
                        </Accordion> 
                         }

                </Card.Footer>
            </Card>

        </div>

    )


}

export default ListingCard