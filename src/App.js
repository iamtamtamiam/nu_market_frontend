import React from 'react';

import './App.css';


import {connect} from 'react-redux';
import {getCurrentUser} from "./actions/userActions"
import NavBar from "./containers/NavBar"

import Home from "./containers/Home"

import { withRouter, Route, Switch } from 'react-router-dom'
import UserListings from './containers/UserListings';
import ListingShow from './components/ListingShow'


import ListingEdit from './containers/ListingEdit'
import ListingNew from './containers/ListingNew';

import Requests from './containers/Requests'
import Search from './components/Search'

import ZipCodeForm from './components/ZipCodeForm'

class App extends React.Component{
  componentDidMount(){
    this.props.getCurrentUser()
  }
  render(){
    return (
      
        <div>
          
          <NavBar location={this.props.location}/>
            
          <ZipCodeForm/>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/:id/listings" component={UserListings} />
            
            <Route exact path="/listings/new" render={({history})=><ListingNew history={history}/>}/>

            <Route exact path="/listings/:id" render={props => {
              const listingToShow = this.props.listings.find(listing => listing.id === props.match.params.id)
              console.log(listingToShow)
              return <ListingShow listingToShow={listingToShow} {...props} />
            }} />

            <Route exact path="/listings/:id/edit" render={props => {
              const listingToEdit = this.props.listings.find(listing => listing.id === props.match.params.id)
              console.log(listingToEdit)
              return <ListingEdit listingToEdit={listingToEdit} {...props} />
            }} />

            <Route exact path="/listings/:id/requests" render={props => {
              const listingForRequests = this.props.listings.find(listing => listing.id === props.match.params.id)
              console.log(listingForRequests)
              return <Requests listingForRequests={listingForRequests} {...props} />
            }} />

            <Route exact path="/search" component={Search} />

          </Switch>
  
        </div>
       
      );

  }

}


const mapStatetoProps = state => {
  return({
    currentUser: state.currentUser,
    listings: state.listings
  }
  )

}



export default withRouter(connect(mapStatetoProps, {getCurrentUser})(App))
