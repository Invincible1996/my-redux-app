/**
 * React Native Projects
 * created by wenqiang 2018/02/06
 */
import { combineReducers } from 'redux';
import fetchReducers from './FetchReducers'

console.log('fetchReducers', fetchReducers())
const rootReducer = combineReducers({
    fetchReducers: fetchReducers
})

export default rootReducer