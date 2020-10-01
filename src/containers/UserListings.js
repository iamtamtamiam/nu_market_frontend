import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'

import UserListingCard from '../components/UserListingCard'

class UserListings extends Component {


    render () {

        const {currentUser, AllListings} = this.props
        //const currentUser2 = this.props.currentUser

        const linkToNew = <Link exact="true" to={`/listings/new`}>Add a New Listings</Link>


        {while (currentUser === "") { return (<div>You have no listings... {linkToNew}</div>)}

        const sellerListings = currentUser.attributes.seller_listings
        const userListings = AllListings.filter(listing => listing.relationships.seller.data.id === currentUser.id)
      

        return (
            <div>
                {linkToNew}
                done loading?
                inside UserListings
                {console.log(this.props)}
                {console.log(currentUser)}
                {console.log(currentUser.attributes.seller_listings)}
                {/*console.log(sellerListings)*/}\
                {console.log("this is sellerl", sellerListings)}
                {console.log("this is user l", userListings)}
                
                {userListings.map(item =>
                   <UserListingCard
                        key={item.id}
                        listingId={item.id}
                        listingAttr={item.attributes}
                        listingBuyer={item.relationships.buyer}
                        listingSeller={item.relationships.seller}
                   />
                )}

            </div>

        )




    
        }

     
        

    }




}


// <UserListingCard
// key={item.id}
// listing={item}
// />

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        AllListings: state.listings
    }

}

export default connect(mapStateToProps)(UserListings)