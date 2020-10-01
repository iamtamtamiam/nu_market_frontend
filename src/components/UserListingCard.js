import React from 'react';
//import {connect} from 'react-redux';
//import {logout} from '../actions/userActions'

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
            this will be an indiviudal listing of a User
            <ul>
                {listingAttributes()}
                Buyer: {props.listingBuyer.data ? props.listingBuyer.data.id : "no buyer" }
            </ul>
           
        </div>

    )


}

export default UserListingCard