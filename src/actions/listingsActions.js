export const setAllListings = json => {
    return {
        type: "SET_ALL_LISTINGS",
        json
    }

}

export const addListing = json => {
    return {
        type: "ADD_LISTING",
        json
    }

}


export const updateListingSuccess = trip => {
    return {
      type: "UPDATE_LISTING",
      trip
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

export const createListing = (listingData, history) => {
    //make sure to set loginData object
    console.log("listing data is", listingData)
    return (dispatch) => {
        //can take out next line?
        //dispatch({type: 'LOGIN'})
        return fetch('http://localhost:3001/listings', {
            credentials: "include",
            method: "POST",
            headers: {
                
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(listingData)
        })
        .then(resp => resp.json())
        .then(listingJson => {
            console.log(listingJson)
            if (listingJson.status){
                alert(listingJson.status)
            }
            else {
                console.log("made it here")
                dispatch(addListing(listingJson.data))
                //dispatch(resetingLoginForm())
                history.push(`/listings/${listingJson.data.id}`)
            }
        })
        .catch(console.log())


    }
}


export const updateListing = (listingData) => {
    //make sure to set loginData object
    console.log("update listing data is", listingData)
    //debugger
    return (dispatch) => {
        debugger
        return fetch('http://localhost:3001/listings', {
            credentials: "include",
            method: "POST",
            headers: {
                
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(listingData)
        })
        .then(resp => resp.json())
        .then(listingJson => {
            console.log(listingJson)
            if (listingJson.status){
                alert(listingJson.status)
            }
            else {
                console.log("made it here")
                dispatch(updateListingSuccess(listingJson.data))
                //dispatch(resetingLoginForm())
                //history.push(`/listings/${listingJson.data.id}`)
            }
        })
        .catch(console.log)

    }

}
