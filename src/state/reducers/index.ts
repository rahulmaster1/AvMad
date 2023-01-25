import providerSourceReducer from './providerSourceReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    providerSourceReducer: providerSourceReducer
});

export default reducers;
