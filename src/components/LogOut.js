import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/userActions'

const LogOut = (props) => {

    

    const handleSubmit = event => {
        event.preventDefault()
        //props.login(props.loginForm)
        props.logout()
    }

    return (
        <form onSubmit={handleSubmit}>
            hello from log out
            <input type="submit" value="LogOut!"></input>
        </form>

    )


}

export default connect(null, {logout})(LogOut)