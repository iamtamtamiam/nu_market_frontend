import React, { Component } from 'react'
//connect to Redux and pass the appropriate props down to its children. 
import { connect } from 'react-redux'
//import {getAllListings} from '../actions/listingsActions'
//import ListingCard from '../components/ListingCard'

import { Container, CardDeck } from 'react-bootstrap'

import RequestCard from '../components/RequestCard'

class Requests extends Component {
    
    // componentDidMount(){
    //     this.props.getAllListings()
    // }

  render() {

    // const listedListings = this.props.listings.map(listing => {
    //         return (
    //             <ListingCard
    //                 currentUser={this.props.currentUser}
    //                 key={listing.id}
    //                 listing={listing}
    //             />
// 
    //         )
    //     })
    
    console.log(this.props.listingForRequests)

    const listingRequests = this.props.listingForRequests.attributes.requests

    console.log(listingRequests)

    return (
      <div>
          inside Requests container
        {/*
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
         */}
        <Container>
          <CardDeck>
          {listingRequests.map(req =>

                <RequestCard
                     key={req.id}
                     request={req}
                />
                )}

          </CardDeck>
        </Container>  
      </div>
    )
  }
}

//export default RestaurantsContainer
const mapStateToProps = state => {
  return {
    listings: state.listings,
    currentUser: state.currentUser
  }
} //needed to set up basic reducer

//need to allow add for input form

//    const mapDispatchToProps = dispatch => {
//        return {
//            addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', payload: text }),
//            deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', payload: id})
//        }
//    }


// const mapDispatchToProps = dispatch => {
//     return {
//         getAllListings: getAllListings
//     }
// 
// 
// }

export default connect(mapStateToProps,)(Requests)