import {resetingLoginForm} from "./loginActions"

export const setCurrentUser = userJson => {
    return {
        type: "SET_CURRENT_USER",
        userJson
    }

}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }

}


export const login = (loginData) => {
    //make sure to set loginData object
    console.log("login data is", loginData)
    return (dispatch) => {

        dispatch({type: 'LOGIN'})
        return fetch('http://localhost:3001/login', {
            credentials: "include",
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
                alert("Incorrect Login Info.")
            }
            else {
                dispatch(setCurrentUser(userJson.data))
                dispatch(resetingLoginForm())
            }
        })
        .catch(console.log())


    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch('http://localhost:3001/get_current_user', {
            credentials: "include",    
            method: "GET",
            headers: {
                
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
           
        })
        .then(resp => resp.json())
        .then(userJson => {
            console.log(userJson)
            if (userJson.error){
                alert(userJson.error)
            }
            else {
                dispatch(setCurrentUser(userJson.data))
            }
        })
        .catch(console.log())


    }


}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser()) //clearing right up front
        //history.push('/')
        //console.log(history)
        return fetch('http://localhost:3001/logout', {
            credentials: "include",    
            method: "POST",
            headers: {
                
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            

        }).then(resp => resp.json())
        .then(userJson => {
        console.log(userJson)
        alert(userJson.message)
        })
        
    }

}


export const signUp = (signUpData) => {
    //make sure to set loginData object
    console.log("signup data is", signUpData)
    return (dispatch) => {
    //     //can take out next line?
         // dispatch({type: 'SIGNUP'})
         return fetch('http://localhost:3001/signup', {
             credentials: "include",
             method: "POST",
             headers: {
                 
                 "Content-Type": "application/json",
                 "Accept": "application/json" 
             },
             body: JSON.stringify(signUpData)
         })
         .then(resp => resp.json())
         .then(userJson => {
             console.log(userJson)
             if (userJson.status){
                 alert(userJson.main.username)
                 alert(userJson.main.password)
             }
             else {
                 dispatch(setCurrentUser(userJson.data))
                 dispatch(resetingLoginForm())
             }
         })
         .catch(console.log())


     }
}
