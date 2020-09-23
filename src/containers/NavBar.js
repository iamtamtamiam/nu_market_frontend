import React from 'react';
import {connect} from 'react-redux';
//import {logout} from '../actions/userActions'
import LoginForm from '../components/LoginForm'
import LogOut from "../components/LogOut"
import {Link} from 'react-router-dom'

const NavBar = ({ currentUser }) => {

  if (currentUser === "") {
    return (
      <div>Please log in to see NavBar
        <LoginForm/>
      </div>
    )
  } else {


    // {currentUser ? `welcome, ${currentUser.attributes.username}` : "not logged in"}
    //{currentUser ? <LogOut/> : <LoginForm/>}
    return (
        <div>
            <p> in Nav Bar</p>
            {`welcome, ${currentUser.attributes.username}`}
           
            <Link exact="true" to={`/`}>Home</Link>

            <LogOut/>
           

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