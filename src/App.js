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
          <NavBar/>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              inside scr/app.js - after navbar
            </p>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/:id/listings" component={UserListings} />
            <Route exact path="/listings/:id" component={ListingShow} />
          </Switch>
  
        </div>
       
      );


  }

}

//need state to get the current user in state
//MAY NEED TO FIX!!!!
//user: state.currentUser






//export default App;
export default withRouter(connect(null, {getCurrentUser})(App))
