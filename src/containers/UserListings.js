import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Link} from 'react-router-dom'

import UserListingCard from '../components/UserListingCard'

import {Container, CardColumns, Button, Jumbotron} from 'react-bootstrap'

class UserListings extends Component {


    render () {

        const {currentUser, AllListings} = this.props
        

        const linkToNew = <Link exact="true" to={`/listings/new`}>Add a New Listing</Link>


        {while (currentUser === "") { return (<div>You have no listings... {linkToNew}</div>)}

        //const sellerListings = currentUser.attributes.seller_listings
        const userListings = AllListings.filter(listing => listing.relationships.seller.data.id === currentUser.id)
      

        return (

            <div>
                <Jumbotron 
                    style={ {width: '100%', objectFit: 'cover', textAlign: 'center', backgroundColor: '#5982ab'} }>
                        <img src="https://i.ibb.co/5W97v0s/output-onlinepngtools.png" alt="nu_logo"
                            style={ {width: '20%', height: '20%'}}
                        ></img>
                        
                        <h1>UserListings</h1>
                </Jumbotron>

                <Link exact="true" to={`/listings/new`}>
                    <Button variant="outline-success" size="lg" block >
                        Add a New Listing
                    </Button>
                </Link>
               
             
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



const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        AllListings: state.listings
    }

}

export default connect(mapStateToProps)(UserListings)