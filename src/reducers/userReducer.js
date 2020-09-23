const initialState = ""

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            console.log("yay! in UserReducer", action.userJson)
            return action.userJson
        case "CLEAR_CURRENT_USER":
            //return state
            return ""

        default: 
            return state
    }




}