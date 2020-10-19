import React from 'react';

import ListingForm from '../components/ListingForm'
import {updateListing, deleteListing} from '../actions/listingsActions' 
import {connect} from 'react-redux';



class ListingEdit extends React.Component {





    handleSubmit = (passedState, userID) => {
        //console.log("made it to handle submit", passedState)
        this.props.updateListing({
            ...passedState,
            listingID: this.props.listingToEdit.id,
            seller_id: userID
        }, this.props.history)
    }


    render() {

        const listingID = this.props.listingToEdit? this.props.listingToEdit.id : null

        return  <>
                <p>this is the edit wrapper </p>
                  <ListingForm editMode  handleSubmit={this.handleSubmit} listingToEdit={this.props.listingToEdit}/>
                  <br/>
                  

                  <button variant="danger" onClick={()=>this.props.deleteListing(listingID, this.props.history)}> Delete This Listing</button> 
                  
                </>
      }


}


export default connect(null, {updateListing, deleteListing})(ListingEdit);