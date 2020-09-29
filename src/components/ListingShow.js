import React from 'react';
//import {connect} from 'react-redux';
//import {logout} from '../actions/userActions'



const ListingShow = ({listingToShow}) => {
  
  console.log(listingToShow)

  const listingAttrs = listingToShow.attributes
  console.log(listingAttrs)

    return (
      
        <div>
          this is a listings show page
          <h3>{listingAttrs.item}</h3>
          <p>{listingAttrs.price} - {listingAttrs.condition} </p>
          <p>{listingAttrs.description}</p>
          <p>maybe take off? {listingAttrs.contact}</p>
          <p>near: {listingAttrs.zipcode}</p>
          <p>maybe change? {listingAttrs.status}</p>
        </div> 
      );

}

export default ListingShow