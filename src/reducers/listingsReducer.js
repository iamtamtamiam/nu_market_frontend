export default (state = [], action) => {
    switch (action.type) {
        case "SET_ALL_LISTINGS":
            console.log("in listingsReducer", action.json)
            return action.json
        case "CLEAR_CURRENT_USER":
            //return state
            return null

        default: 
            return state
    }




}