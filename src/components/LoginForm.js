import React from 'react';
import {connect} from 'react-redux';
import {fillLoginForm} from '../actions/loginActions'
//import loginForm from '../reducers/loginFormReducer';
import {login, signUp} from '../actions/userActions'


const LoginForm = (props) => {

    const handleInputChange = event => {
        const {name, value} = event.target
        const loginFormInfo = {
            ...props.loginForm,
            [name]: value
        }
        props.fillLoginForm(loginFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (props.signUpMode) {
            props.signUp(props.loginForm)
        } else {props.login(props.loginForm)}
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
                type="text" 
                value={props.loginForm.username}
                name="username"
                //onChange={props.fillLoginForm}
                onChange={handleInputChange}
                >
            </input>
            <label>Password</label>
            <input 
                type="text" 
                value={props.loginForm.password}
                name="password"
                onChange={handleInputChange}
                >
            </input>

            <input type="submit" value={props.signUpMode ? "Sign Me Up" : "Login!"}></input>


        </form>

    )


}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, {fillLoginForm, login, signUp})(LoginForm)