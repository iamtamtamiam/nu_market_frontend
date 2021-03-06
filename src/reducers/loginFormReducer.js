const initialState = {
    username: "",
    password: ""
}


const loginForm = (state = initialState, action) => {
    switch(action.type) {
      case 'FILL_LOGIN_FORM':
        return action.loginData
      case 'RESET_LOGIN_FORM':
        return initialState
      default:
        return state;
    }
  }

export default loginForm;