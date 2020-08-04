export const setCurrentUser = userJson => {
    return {
        type: "SET_CURRENT_USER",
        userJson
    }

}


export const login = (loginData) => {
    //make sure to set loginData object
    console.log("login data is", loginData)
    return (dispatch) => {
        dispatch({type: 'LOGIN'})
        return fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(loginData)
        })
        .then(resp => resp.json())
        .then(userJson => {
            console.log(userJson)
            if (userJson.status){
                alert(userJson.status)
            }
            else {
                dispatch(setCurrentUser(userJson))
            }
        })
        .catch(console.log())


    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch('http://localhost:3000/get_current_user', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
           
        })
        .then(resp => resp.json())
        .then(userJson => {
            console.log(userJson)
            if (userJson.status){
                alert(userJson.status)
            }
            else {
                dispatch(setCurrentUser(userJson))
            }
        })
        .catch(console.log())


    }




}