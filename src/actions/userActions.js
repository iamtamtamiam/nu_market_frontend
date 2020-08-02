export const setCurrentUser = user => {
    return {

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
        .then(json => console.log(json))


    }
}