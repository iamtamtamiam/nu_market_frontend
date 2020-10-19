import { updateListing } from "../actions/listingsActions"

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
            console.log("delete listing", action.listingID)
            return state.filter(listing => listing.id !== action.listingID)

        case "ADD_REQUEST":
            console.log("in add request reducer", action.json, state)
            const listingToAttach = state.find(listing => listing.id === action.json.relationships.listing.data.id)
            console.log(listingToAttach.attributes.requests)
            const requestToAttach = {
                name: action.json.attributes.name,
                buyer_id: action.json.attributes.buyer.id,
                created_at: action.json.attributes.updated_at,
                id: action.json.id,
                listing_id: action.json.relationships.listing.data.id,
                message: action.json.attributes.message,
                phone: action.json.attributes.phone,
                updated_at: action.json.attributes.updated_at
            }
            const updatedRequestsArray = listingToAttach.attributes.requests.concat(requestToAttach)
            // const updatedListing = {...listingToAttach, requests: updatedRequestsArray}
            const updatedListing = {
                ...listingToAttach, 
                attributes:{
                    ...listingToAttach.attributes,
                    requests: updatedRequestsArray
                }
            }
            return state.map(listing => listing.id === updatedListing.id ? updatedListing : listing)

            case "ADD_PHOTO":
            console.log("in add photo reducer", action.json, state)
            const listingToAttachPhoto = state.find(listing => listing.id === action.json.attributes.listing.id.toString())
            //debugger
            console.log(listingToAttachPhoto)
             const photoToAttach = {
                 url: action.json.attributes.url,
                 listing_id: action.json.attributes.listing.id,
             }
            const updatedPhotosArray = listingToAttachPhoto.attributes.photos.concat(photoToAttach)
            
             const updatedListingtoAttachPhoto = {
                 ...listingToAttachPhoto, 
                 attributes:{
                     ...listingToAttachPhoto.attributes,
                     photos: updatedPhotosArray
                 }
             }
            // return state.map(listing => listing.id === updatedListing.id ? updatedListing : listing)
            return state.map(listing => listing.id === updatedListingtoAttachPhoto.id ? updatedListingtoAttachPhoto : listing)
        default: 
            return state
    }




}