import { FORM_CHANGE_NAME_TEXT, FORM_CHANGE_NUMBER_TEXT, FORM_RESET_STATE } from "../actions/actionTypes"

const initialState = {
    name: '',
    number: '',
}

export default function formReduce(state = initialState, action) {
    console.log('STATE: ', state)
    switch (action.type){
        case FORM_CHANGE_NAME_TEXT:
            return {
                ...state, 
                name: action.payload
            }
        case FORM_CHANGE_NUMBER_TEXT:
            return {
                ...state, 
                number: action.payload
            }
        case FORM_RESET_STATE:
            return {
                name: '',
                number: ''
            }
        default:
            return state
    }
}