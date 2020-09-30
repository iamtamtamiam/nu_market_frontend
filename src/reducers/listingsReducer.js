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

        default: 
            return state
    }




}