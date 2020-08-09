export const setAllListings = json => {
    return {
        type: "SET_ALL_LISTINGS",
        json
    }

}


export const getAllListings = () => {

    return dispatch => {
        return fetch('http://localhost:3001/listings', {
            credentials: "include",    
            method: "GET",
            headers: {
                
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
        })
        .then(resp => resp.json())
        .then(json => {
            console.log("getting all listings", json.data)
            dispatch(setAllListings(json.data))
        })
        .catch(console.log)


    }


}