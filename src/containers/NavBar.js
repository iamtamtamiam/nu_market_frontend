import React from 'react';
import {connect} from 'react-redux';
//import {logout} from '../actions/userActions'
import LoginForm from '../components/LoginForm'
import LogOut from "../components/LogOut"
import {Link} from 'react-router-dom'

import {Navbar, Nav} from 'react-bootstrap'

const NavBar = ({ currentUser }) => {

  if (!currentUser) {
    return (
      <div>
        <Navbar bg="light" variant="light" justify-content-between>
          <Nav.Item>Please log in to see NavBar</Nav.Item>
          <Nav.Item><LoginForm/></Nav.Item>
        </Navbar>
      </div>
    )
  } else {


    // {currentUser ? `welcome, ${currentUser.attributes.username}` : "not logged in"}
    //{currentUser ? <LogOut/> : <LoginForm/>}
    return (
        <div>
          <Navbar bg="light" variant="light" >
            <Nav className="mr-auto" className="justify-content-center" >
              <Nav.Item style={{padding: "3px"}}>in Nav Bar</Nav.Item>
              

                <Nav.Item style={{padding: "3px"}}><Link exact="true" to={`/`}>Home</Link></Nav.Item>
                <Nav.Item style={{padding: "3px"}}><Link exact="true" to={`/users/${currentUser.id}/listings`}>My Listings</Link></Nav.Item>
                <Nav.Item style={{padding: "3px 3px 3px 50px"}}>{`Welcome, ${currentUser.attributes.username}!`}</Nav.Item>

          

                <LogOut/>
              </Nav>
            </Navbar>
        </div>

    )
  }


}

const mapStateToProps = ({ currentUser }) => {
    return {
      //currentUser: state.currentUser
      currentUser
    }
  }

export default connect(mapStateToProps)(NavBar)