import { APP_ADD_ID_STATE, APP_SET_DATA_STATE, APP_SET_DATA_ARR_STATE } from "./actionTypes";

export function setStateId() {
    return {
        type: APP_ADD_ID_STATE
    }
}

export function setStateData(obj) {
    return {
        type: APP_SET_DATA_STATE,
        payload: obj
    }
}

export function setStateDataArr(arr) {
    return {
        type: APP_SET_DATA_ARR_STATE,
        payload: arr
    }
}