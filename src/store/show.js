import { getShowInfo } from '../services/api-services'
const initialState = {showId: null, showInfo: []};

const actions = {
    setShowId: 'setShowId',
    setShowInfo: 'setShowInfo'
}

export function setShowId(showId) {
    return {
        type: actions.setShowId,
        showId
    }
}

export function setShowInfo(showInfo) {
    return {
        type: actions.setShowInfo,
        showInfo
    }
}

export function fetchShowInfo(showId) {
    return async (dispatch) => {
        dispatch(setShowId(showId));
        try {
            const showInfo = await getShowInfo(showId);
            dispatch(setShowInfo(showInfo));
        } catch (e) {
            //Error
        }
    }
}

export function showReducer(previousState=initialState, action){
    switch(action.type){
        case actions.setShowId:
            return {
                ...previousState,
                showId: action.showId,
            }
        case actions.setShowInfo:
            return {
                ...previousState,
                showInfo: action.showInfo,
            }
        default: return previousState
    }
}

