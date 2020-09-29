import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';

import {connect} from 'react-redux';
import {getCurrentUser} from "./actions/userActions"
import NavBar from "./containers/NavBar"
//import AllListings from "./containers/AllListings"
import Home from "./containers/Home"

import { withRouter, Route, Switch } from 'react-router-dom'
import UserListings from './containers/UserListings';
import ListingShow from './components/ListingShow'
import ListingForm from './components/ListingForm'



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  componentDidMount(){
    this.props.getCurrentUser()
  }
  render(){
    return (
      
        <div>
          {/*this.props.currentUser ? <LogOut/> : <LoginForm/>*/}
          <NavBar location={this.props.location}/>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              inside scr/app.js - after navbar
            </p>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/:id/listings" component={UserListings} />
            
            <Route exact path="/listings/new" component={ListingForm} />

            <Route exact path="/listings/:id" render={props => {
              const listingToShow = this.props.listings.find(listing => listing.id === props.match.params.id)
              console.log(listingToShow)
              return <ListingShow listingToShow={listingToShow} {...props} />
            }} />

            
          </Switch>
  
        </div>
       
      );


  }

}

//<Route exact path="/listings/:id" component={ListingShow} />

//need state to get the current user in state
//MAY NEED TO FIX!!!!
//user: state.currentUser

const mapStatetoProps = state => {
  return({
    currentUser: state.currentUser,
    listings: state.listings
  }
  )

}




//export default App;
export default withRouter(connect(mapStatetoProps, {getCurrentUser})(App))
