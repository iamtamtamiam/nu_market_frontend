import React, { Component } from 'react'

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


const mapStateToProps = state => {
  return {
    listings: state.listings,
    currentUser: state.currentUser
  }
} 


export default connect(mapStateToProps, {getAllListings})(AllListings)