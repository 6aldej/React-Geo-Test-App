import {combineReducers} from 'redux';
import appReducer from './appReducer';
import formReducer from './formReducer';

export default combineReducers({
    app: appReducer,
    form: formReducer
})