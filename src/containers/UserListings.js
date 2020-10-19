import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'

import UserListingCard from '../components/UserListingCard'

import {Container, CardColumns, Button, Jumbotron} from 'react-bootstrap'

class UserListings extends Component {


    render () {

        const {currentUser, AllListings} = this.props
        //const currentUser2 = this.props.currentUser

        //NEED TO TAKE OUT LINK TO NEW BC OF BUTTON

        const linkToNew = <Link exact="true" to={`/listings/new`}>Add a New Listing</Link>


        {while (currentUser === "") { return (<div>You have no listings... {linkToNew}</div>)}

        const sellerListings = currentUser.attributes.seller_listings
        const userListings = AllListings.filter(listing => listing.relationships.seller.data.id === currentUser.id)
      

        return (

            <div>
                <Jumbotron 
                    style={ {width: '100%', objectFit: 'cover', textAlign: 'center', backgroundColor: '#5982ab'} }>
                        <img src="https://i.ibb.co/5W97v0s/output-onlinepngtools.png"
                            style={ {width: '20%', height: '20%'}}
                        ></img>
                        
                        <h1>UserListings</h1>
                </Jumbotron>

                <Link exact="true" to={`/listings/new`}>
                    <Button variant="outline-success" size="lg" block >
                        Add a New Listing
                    </Button>
                </Link>
               
             
                {console.log(this.props)}
                {console.log(currentUser)}
                {console.log(currentUser.attributes.seller_listings)}
                {/*console.log(sellerListings)*/}\
                {console.log("this is sellerl", sellerListings)}
                {console.log("this is user l", userListings)}
                <Container>
                    <CardColumns>
                        {userListings.map(item =>

                           <UserListingCard
                                key={item.id}
                                listingId={item.id}
                                listingAttr={item.attributes}
                                listingBuyer={item.relationships.buyer}
                                listingSeller={item.relationships.seller}
                                currentUser={currentUser}
                                history={this.props.history}
                           />
                        )}
                    </CardColumns>
                </Container>

                End of Listings
                <Link exact="true" to={`/listings/new`}>
                    <Button variant="outline-success" size="lg" block >
                        Add a New Listing
                    </Button>
                </Link>

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