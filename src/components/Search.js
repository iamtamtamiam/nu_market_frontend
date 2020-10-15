import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {createRequest} from '../actions/listingsActions'

import Button from 'react-bootstrap/Button'
import ListingCard from './ListingCard';
import { Container, CardDeck } from 'react-bootstrap'
import { render } from '@testing-library/react';
 
class Search extends React.Component {

  


state = {
    //item: this.props.listingToEdit ? this.props.listingToEdit.attributes.item : "",
    searchTerm: "",
    itemsToRender: this.props.allListings
  }
 
 
// baseState = this.state

//seller_id: this.props.userID,
  
 
handleInputChange = event => {
    //const {name, value} = event.target
    // const loginFormInfo = {
    //     ...props.loginForm,
    //     [name]: value
    // }
   

    const refinedItems = this.props.allListings.filter(listing => listing.attributes.item.includes(event.target.value.toLowerCase()))
    //props.fillLoginForm(loginFormInfo)
    //console.log(this.state)
    console.log(refinedItems)

    // this.setState({
    //     ...this.state,
    //     [name]: value
    // })

    this.setState({
        searchTerm: event.target.value,
        itemsToRender: refinedItems
    })

}


// renderingItems = this.state.itemsToRender.map(listing => {
//     return(
//         <ListingCard
//             currentUser={this.props.currentUser}
//             key={listing.id}
//             listing={listing}
//             history={this.props.history}
//         />
//     )
// })

 handleSubmit = event => {
     event.preventDefault()
     console.log("made it to handle Search submit!")
     //this.props.createListing({...this.state, seller_id: this.props.userID,}, this.props.history)
     //this.setState(this.initialState)
    console.log(this.state)
    this.renderingItems()
    
 }





 
  render() {

    const renderingItems = this.state.itemsToRender.map(listing => {
        return(
            <ListingCard
                currentUser={this.props.currentUser}
                key={listing.id}
                listing={listing}
                history={this.props.history}
            />
        )
    })

    return (
        <div>
        This is the Search

    
      <form onSubmit={this.handleSubmit} >

          

        <label>Enter Search Term:</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.searchTerm} name="searchTerm"/>
        
            <Button variant="info" type="submit">Search </Button> 
      </form>


      <Container>
          <CardDeck>
           {renderingItems}
          </CardDeck>
        </Container>  
      

      {console.log(this.state)}
      

      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        allListings: state.listings,
        currentUser: state.currentUser
    }

}



 
export default connect(mapStateToProps, )(Search);