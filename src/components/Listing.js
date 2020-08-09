import React from 'react';
//import {connect} from 'react-redux';
//import {logout} from '../actions/userActions'

const Listing = (props) => {
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


    const listingAttributes = () => {
        let attributes = props.listing.attributes
        console.log(attributes)
        for (const [key, value] of Object.entries(attributes)) {
           return (`${key}: ${value}`);
          }
    
    }


    return (
        <div>
            this will be an indiviudal listing
            <li>
            {listingAttributes()}
            </li>

        </div>

    )


}

export default Listing