import React from 'react';
import {connect} from 'react-redux';
//import {logout} from '../actions/userActions'
//import {Link} from 'react-router-dom'

import {Card} from 'react-bootstrap'

const RequestCard = (props) => {
    console.log(props)
    const requestToShow = props.request

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


      // const listingAttributes = () => {
      //     let attributesObj = props.listingAttr
      //     //console.log(attributesObj)
      //     let attributesArray = []
      //     for (const [key, value] of Object.entries(attributesObj)) {
      //        //return (`${key}: ${value}`);
      //        attributesArray.push(<li>{key}: {value}</li>)
      //       }
      //     return attributesArray
      // 
      // }

//could split up listing attributes here depending on currentuser

    //const attributesObj = props.listingAttr
    //{listingAttributes()}

//FIND BUYER BY NAME? fetch buyers?
    return (
        
        <div>
            
            <Card>
                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2440/7149/products/Solid_Blue-Gray_600x.jpg?v=1579880598" 
                    style={ {width: '100%', height: '12rem', objectFit: 'cover'} }
                />
                <Card.Body>
                    <Card.Title>This is an individual request in reqcard</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>phone: {requestToShow.phone}</li>
                            <li>message: {requestToShow.message}</li>
                            
                            <li>sent: {requestToShow.updated_at}</li>
                            
                        </ul>
                    </Card.Text>   
                </Card.Body>
                <Card.Footer>
                    
                    
                    <small className="text-muted">footer</small><br></br>
                    
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

export default connect(mapStateToProps)(RequestCard)