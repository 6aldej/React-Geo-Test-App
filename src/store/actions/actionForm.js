import { FORM_CHANGE_NAME_TEXT, FORM_CHANGE_NUMBER_TEXT, FORM_RESET_STATE } from "./actionTypes";

export function setNameText(name) {
    return {
        type: FORM_CHANGE_NAME_TEXT,
        payload: name
    }
}

export function setNumberText(number) {
    return {
        type: FORM_CHANGE_NUMBER_TEXT,
        payload: number
    }
}

export function resetState() {
    return {
        type: FORM_RESET_STATE
    }
}