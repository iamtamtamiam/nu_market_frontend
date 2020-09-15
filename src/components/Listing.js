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
        let attributesObj = props.listing.attributes
        //console.log(attributesObj)
        let attributesArray = []
        for (const [key, value] of Object.entries(attributesObj)) {
           //return (`${key}: ${value}`);
           attributesArray.push(<li>{key}: {value}</li>)
          }
        return attributesArray
    
    }


    return (
        <div>
            this will be an indiviudal listing
            <ul>
            {listingAttributes()}
            </ul>

        </div>

    )


}

export default Listing