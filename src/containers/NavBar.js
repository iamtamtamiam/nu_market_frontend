import React from 'react';
import {connect} from 'react-redux';
//import {logout} from '../actions/userActions'
import LoginForm from '../components/LoginForm'
import LogOut from "../components/LogOut"


const NavBar = ({ currentUser }) => {

    
    return (
        <div>
            <p> in Nav Bar  the user is,  </p>
    
            {currentUser ? `welcome, ${currentUser.attributes.username}` : "not logged in"}
            
            {console.log(currentUser)}
            {currentUser ? <LogOut/> : <LoginForm/>}
        </div>

    )


}

const mapStateToProps = ({ currentUser }) => {
    return {
      //currentUser: state.currentUser
      currentUser
    }
  }

export default connect(mapStateToProps)(NavBar)