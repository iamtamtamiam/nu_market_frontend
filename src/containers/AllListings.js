import React, { Component } from 'react'
//connect to Redux and pass the appropriate props down to its children. 
import { connect } from 'react-redux'
import {getAllListings} from '../actions/listingsActions'
import ListingCard from '../components/ListingCard'

import { Container, CardColumns } from 'react-bootstrap'

class AllListings extends Component {
    
    componentDidMount(){
        this.props.getAllListings()
    }

  render() {

    const listedListings = this.props.listings.map(listing => {
            return (
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
          inside All Listings container
        {/*
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
         */}
        <Container>
          <CardColumns
            
          >
            {listedListings}
          </CardColumns>
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

export default connect(mapStateToProps, {getAllListings})(AllListings)