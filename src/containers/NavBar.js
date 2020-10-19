import React from 'react';
import {connect} from 'react-redux';
//import {logout} from '../actions/userActions'
import LoginForm from '../components/LoginForm'
import LogOut from "../components/LogOut"
import {Link} from 'react-router-dom'

import {Navbar, Nav, Accordion, Card, Button} from 'react-bootstrap'

const NavBar = ({ currentUser }) => {

  if (!currentUser) {
    return (
      <div>
        <Navbar bg="light" variant="light" justify-content="center"
          style={ {justifyContent: 'center' } }
        >
          

          <Accordion >
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                   Login Here!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body> Login Info: <LoginForm/></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          OR<br></br>
          <Accordion >
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                   Sign up here!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body> Enter Sign Up Info: <LoginForm signUpMode/></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Navbar>
      </div>
    )
  } else {


    // {currentUser ? `welcome, ${currentUser.attributes.username}` : "not logged in"}
    //{currentUser ? <LogOut/> : <LoginForm/>}
    return (
        <div>
          <Navbar bg="light" variant="light" 
            style={ {justifyContent: 'center' } }
          >
            <Nav className="mr-auto" className="justify-content-center" >
              
              

                <Nav.Item style={{padding: "3px"}}><Link exact="true" to={`/`}>Home</Link></Nav.Item>
                <Nav.Item style={{padding: "3px"}}><Link exact="true" to={`/users/${currentUser.id}/listings`}>My Listings</Link></Nav.Item>
                <Nav.Item style={{padding: "3px"}}><Link exact="true" to={`/search`}>Search</Link></Nav.Item>
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