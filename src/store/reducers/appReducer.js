import { APP_ADD_ID_STATE, APP_SET_DATA_STATE, APP_SET_DATA_ARR_STATE } from "../actions/actionTypes"

const initialState = {
    data: [],
    id: 0,
}

export default function appReducer(state = initialState, action) {
    switch (action.type){
        case APP_ADD_ID_STATE:
            return {
                ...state,
                id: state.id+1
            }
        case APP_SET_DATA_STATE:
            return {
                ...state,
                data: [action.payload, ...state.data]
            }
        case APP_SET_DATA_ARR_STATE:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}