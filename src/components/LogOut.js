import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/userActions'
import { withRouter } from 'react-router-dom'

//const LogOut = (props) => {
const LogOut = ({logout, history}) => {
    

    const handleSubmit = event => {
        event.preventDefault()
        //props.login(props.loginForm)
        //props.logout()
        logout()
        history.push('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            hello from log out
            <input type="submit" value="LogOut!"></input>
        </form>

    )


}

export default withRouter(connect(null, {logout})(LogOut))