import { getShows } from '../services/api-services'
const initialState = {shows: [], searchQuery: "", error: null};

const actions = {
    setSearchQuery: 'setSearchQuery',
    setShows: 'setShows',
}

export function setSearchQuery(query){
    return {
        type: actions.setSearchQuery,
        query
    }
}

export function setShows(shows){
    return {
        type: actions.setShows,
        shows
    }
}

export function fetchShows(query){
    return async (dispatch) => {
        dispatch(setSearchQuery(query));
        try {
            const shows = await getShows(query);
            dispatch(setShows(shows));
        } catch (error) {
            //Handle the error
        }
    }
}

export function showsReducer (previousState=initialState, action){
    switch(action.type){
        case actions.setSearchQuery: 
            return {
                ...previousState,
                searchQuery: action.query,
            }
        case actions.setShows: 
        return {
            ...previousState,
            shows: action.shows
        }
        default: return previousState
    }
}

