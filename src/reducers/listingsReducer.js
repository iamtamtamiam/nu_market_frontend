export default (state = [], action) => {
    switch (action.type) {
        case "SET_ALL_LISTINGS":
            console.log("in listingsReducer", action.json)
            return action.json
        case "ADD_LISTING":
            console.log("in add listing reducer", action.json)
            return state.concat(action.json)
            //return action.json
        //case "CLEAR_CURRENT_USER":
        //    //return state
        //    return []
        case "UPDATE_LISTING":
            console.log(action.json)
            return state.map(listing => listing.id === action.json.id ? action.json : listing)
            // state.map(listing => listing.id === action.json.id ? action.listing : listing)

        case "DELETE_LISTING":
            console.log(action.listingID)
            return state.filter(listing => listing.id === action.listingID ? false : true)

        default: 
            return state
    }




}