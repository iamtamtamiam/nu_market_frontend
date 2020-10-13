

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


export const updateListingSuccess = json => {
    return {
      type: "UPDATE_LISTING",
      json
    }
  }



  export const deleteListingSuccess = listingID => {
    return {
      type: "DELETE_LISTING",
      listingID
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


export const updateListing = (listingData, history) => {
    //make sure to set loginData object
    const sendableListingData = {
        item: listingData.item,
        description: listingData.description,
        price: listingData.price,
        condition: listingData.condition,
        status: listingData.status,
        zipcode: listingData.zipcode
        
    }
    console.log("update listing data is", sendableListingData)
    //debugger
    return (dispatch) => {
        return fetch(`http://localhost:3001/listings/${listingData.listingID}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(sendableListingData)
        })
        .then(resp => resp.json())
        .then(listingJson => {
            console.log(listingJson)
            if (listingJson.status){
                alert(listingJson.status)
            }
            else {
                console.log("made it here in update patch")
                console.log(listingJson)
                dispatch(updateListingSuccess(listingJson.data))
                //dispatch(resetingLoginForm())
                history.push(`/listings/${listingJson.data.id}`)
                
            }
        })
        .catch(console.log)

    }

}



export const deleteListing = (listingID, history) => {
    //make sure to set loginData object
    
    console.log("listing to delete is", listingID)
    //debugger
    return (dispatch) => {
        return fetch(`http://localhost:3001/listings/${listingID}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
        })
        .then(resp => resp.json())
        .then(listingJson => {
            console.log(listingJson)
            if (listingJson.error){
                alert(listingJson.error)
            }
            else {
                console.log("made it here in delete")
                console.log(listingJson, history)
                dispatch(deleteListingSuccess(listingID))
                //dispatch(resetingLoginForm())
                debugger
                //history.replace(`/`)
                history.push(`/`)
                
            }
        })
        .catch(console.log)

    }

}