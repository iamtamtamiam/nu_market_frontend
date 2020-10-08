import React from 'react';
import {connect} from 'react-redux';
//import {logout} from '../actions/userActions'
import {Link} from 'react-router-dom'

import {Card} from 'react-bootstrap'

const UserListingCard = (props) => {
    console.log(props)

    // const listingAttributes = props.listing.attributes.forEach(attribute => {
    //     return (
    //         [attribute.key, attribute.value]
    //     )
    // })

     // const listingAttributes = () => {
     //     console.log(props.listing)
     //     for(const attribute in props.listing) {
     //         return (`${attribute}: ${props.listing.attributes[attribute]}`)
     //     }
     // 
     // }


      const listingAttributes = () => {
          let attributesObj = props.listingAttr
          //console.log(attributesObj)
          let attributesArray = []
          for (const [key, value] of Object.entries(attributesObj)) {
             //return (`${key}: ${value}`);
             attributesArray.push(<li>{key}: {value}</li>)
            }
          return attributesArray
      
      }

//could split up listing attributes here depending on currentuser

//FIND BUYER BY NAME? fetch buyers?
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2440/7149/products/Solid_Blue-Gray_600x.jpg?v=1579880598" 
                    style={ {width: '100%', height: '12rem', objectFit: 'cover'} }
                />
                <Card.Body>
                    <Card.Title>this will be an indiviudal listing of a User</Card.Title>
                    <Card.Text>
                        <ul>
                            {listingAttributes()}
                        </ul>
                    </Card.Text>   
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Buyer: {props.listingBuyer.data ? props.listingBuyer.data.id : "no buyer" }</small><br></br>
                    {(props.currentUser.id === props.listingSeller.data.id) ? (<Link to={`/listings/${props.listingId}/edit`}>Edit this listing</Link>) : "I am NOT seller" }
                </Card.Footer>
            </Card>
           
        </div>

    )


}


const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }

export default connect(mapStateToProps)(UserListingCard)