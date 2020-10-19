import React from 'react';
//import {connect} from 'react-redux';
//import {logout} from '../actions/userActions'

import {Link} from 'react-router-dom';

import {Card} from 'react-bootstrap'

import RequestForm from './RequestForm'

const ListingCard = (props) => {
    console.log(props)

    // const listingAttributes = props.listing.attributes.forEach(attribute => {
    //     return (
    //         [attribute.key, attribute.value]
    //     )
    // })

    // const listingAttributes = () => {
    //     console.log(props.listing.attributes)
    //     for(const attribute in props.listing.attributes) {
    //         return (`${attribute}: ${props.listing.attributes[attribute]}`)
    //     }
    // 
    // }


    // const listingAttributes = () => {
    //     let attributesObj = props.listing.attributes
    //     //console.log(attributesObj)
    //     let attributesArray = []
    //     for (const [key, value] of Object.entries(attributesObj)) {
    //        //return (`${key}: ${value}`);
    //        attributesArray.push(<li>{key}: {value}</li>)
    //       }
    //     return attributesArray
    // 
    // }


    const listingAttr = props.listing.attributes

    // const handleClick = link => {
    //     console.log(link)
    //     if (props.currentUser !== "") {
    //         return "to={`/listings/${props.listing.id}`}"
    //     }
    // }

    //to={`/listings/${props.listing.id}`}

//could split up listing attributes here depending on currentuser
  
    while (props.listing === "") { return (<div>loading</div>)}


// <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/11JFQo2o59L._SX331_BO1,204,203,200_.jpg" 
//                     style={ {width: '100%', height: '12rem', objectFit: 'cover'} }
//                 /> 

 
    return (

        <div>
            <Card>

            {listingAttr.photos.length > 0 &&
            
            <Card.Img variant="top" src={listingAttr["photos"][0]["url"]} 
            style={ {width: '100%', height: '12rem', objectFit: 'cover'} }
            />

            }

                  
                 
                <Card.Body>
                    <Card.Title><Link key={props.listing.id}  to={`/listings/${props.listing.id}`}>{listingAttr.item}</Link></Card.Title>
                    <Card.Text>
                        <p>{listingAttr.price} - {listingAttr.condition}</p>
                        <p>{listingAttr.zipcode}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>

                    {(props.currentUser.id === props.listing.relationships.seller.data.id) ? "you are the seller" : <RequestForm {...props}/> }
                </Card.Footer>
            </Card>

        </div>

    )


}

export default ListingCard