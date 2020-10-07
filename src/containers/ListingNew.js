import React from 'react';
import ListingForm from '../components/ListingForm'
import { createListing } from '../actions/listingsActions'
import { connect } from 'react-redux'

const ListingNew = ({ history, createListing }) => {

  const handleSubmit = (passedState, userID) => {
    console.log("handling submit for create")
    console.log(userID)
    createListing({
      ...passedState,
      seller_id: userID
    }, history)
  }
  return  <ListingForm history={history} handleSubmit={handleSubmit} />
};

//WHY CANT I CONNECT TO PROPS HERE

// const mapStateToProps = state => {
//     return {
//         userID: state.currentUser.id
//     }
// 
// }

export default connect(null, { createListing })(ListingNew);

// handleSubmit = event => {
//     event.preventDefault()
//     console.log("made it to handle submit!")
//     this.props.createListing({...this.state, seller_id: this.props.userID,}, this.props.history)
//     this.setState(this.initialState)
// }