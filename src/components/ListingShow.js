import React from 'react';
//import {connect} from 'react-redux';
//import {logout} from '../actions/userActions'

import {Jumbotron, Card, Carousel} from 'react-bootstrap'



const ListingShow = ({listingToShow}) => {
  
  console.log(listingToShow)

  const listingAttrs = listingToShow.attributes
  console.log(listingAttrs)

    return (
            
        <div>
          <Jumbotron 
              style={ {width: '100%', objectFit: 'cover', textAlign: 'center', backgroundColor: '#5982ab'} }>
                  <h3>Listing Show Page</h3>
                  <h1>{listingAttrs.item}</h1>
          </Jumbotron>

        
          <Card style={ {height: 'auto'}}>
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2440/7149/products/Solid_Blue-Gray_600x.jpg?v=1579880598" 
                    style={ {width: '70%', height: '12rem', objectFit: 'cover', position: 'relative', margin:'auto'} }
                />
          <Carousel
            style={ {color: '#20c997'} }
          >
            {listingAttrs.photos.length > 0 &&
            
                listingAttrs.photos.map(photo => { return (

                  
                    <Carousel.Item>
                    <img variant="top" src={photo.url} 
                    style={ {width: '70%', height: '20rem', objectFit: 'contain', position: 'relative', margin:'auto'} }
                    />
                    </Carousel.Item>
                  
                    )
                  })
            }

          </Carousel> 


            <Card.Body
                    style={ {width: '70%', height: '12rem', objectFit: 'cover', position: 'relative', margin:'auto'} }
            >
            
            <Card.Text>
                <p>{listingAttrs.price} - {listingAttrs.condition} </p>
                <p>{listingAttrs.description}</p>
            </Card.Text>
            <Card.Text>
                <p>maybe take off? {listingAttrs.contact}</p>
                <p>near: {listingAttrs.zipcode}</p>
                <p>maybe change? {listingAttrs.status}</p>
            </Card.Text>
            </Card.Body>
          </Card>
        </div> 
      );

}

export default ListingShow