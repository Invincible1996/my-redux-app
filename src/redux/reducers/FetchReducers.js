

import * as Types from '../constants/FetchTypes'

const initialState = {
    user: '',
    age: '18'


    
}

export default function fetchReducers(state = initialState, action = {}) {
    switch (action.type) {
        case Types.ACTION_FETCH_LOADING:
            return {
                ...state,
                user: "Loading",
                age: null
            }
        case Types.ACTION_FETCH_SUCCESS:
            return {
                ...state,
                user: action.data.phone,
                age: action.data.email
            }
        case Types.ACTION_FETCH_ERROR:
            return {
                ...state,
                user: null,
                age: null
            }
        default:
            return state;
    }
}

