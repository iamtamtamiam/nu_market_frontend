import React from 'react';


import {Jumbotron, Card, Carousel} from 'react-bootstrap'



const ListingShow = ({listingToShow}) => {
  
  const listingAttrs = listingToShow.attributes
         
    return (
            
        <div>
          <Jumbotron 
              style={ {width: '100%', objectFit: 'cover', textAlign: 'center', backgroundColor: 'rgb(94 163 187'} }>
              <h1>{listingAttrs.item}</h1>
          </Jumbotron>

          <Card style={ {height: 'auto'}}>
         
              <Carousel
                style={ {textAlign: 'center'} }
              >
                {listingAttrs.photos.length > 0 &&

                    listingAttrs.photos.map(photo => { return (
                    

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

                <Card.Body
                        style={ {width: '70%', height: '12rem', objectFit: 'cover', position: 'relative', margin:'auto'} }
                >
                    
                      <ul>
                        <li>${listingAttrs.price} - {listingAttrs.condition} </li>
                        <li>Description: {listingAttrs.description}</li>
                      </ul>
                   
                    <ul>
                        <li>Contact: {listingAttrs.contact}</li>
                        <li>Near: {listingAttrs.zipcode}</li>
                        <li>Status: {listingAttrs.status}</li>
                        </ul>
                    
                </Card.Body>
          </Card>
        </div> 
      );

}

export default ListingShow