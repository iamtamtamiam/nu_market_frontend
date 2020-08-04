export default (state = [], action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            console.log("yay! in UserReducer", action.userJson)
            return action.userJson

        default: 
            return state
    }


}