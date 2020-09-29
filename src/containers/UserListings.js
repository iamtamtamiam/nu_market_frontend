import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'

import UserListingCard from '../components/UserListingCard'

class UserListings extends Component {


    render () {

        const {currentUser} = this.props
        //const currentUser2 = this.props.currentUser

        const linkToNew = <Link exact="true" to={`/listings/new`}>Add a New Listings</Link>


        {while (currentUser === "") { return (<div>You have no listings... {linkToNew}</div>)}

        const sellerListings = currentUser.attributes.seller_listings
        
      

        return (
            <div>
                {linkToNew}
                done loading?
                inside UserListings
                {console.log(this.props)}
                {console.log(currentUser)}
                {console.log(currentUser.attributes.seller_listings)}
                {console.log(sellerListings)}
                
                {sellerListings.map(item => 
                   <UserListingCard
                        key={item.id}
                        listing={item}
                   />
                )}

            </div>

        )




    
        }

     
        

    }




}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
        //UserListings: state.currentUser
    }

}

export default connect(mapStateToProps)(UserListings)