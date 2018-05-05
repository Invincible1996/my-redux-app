

import * as Types from '../constants/FetchTypes'

const initialState = {
    user: '',
    age: '18',
    isLoading: false
}

export default function fetchReducers(state = initialState, action = {}) {
    switch (action.type) {
        case Types.ACTION_FETCH_LOADING:
            return {
                ...state,
                user: "",
                age: null,
                isLoading: true
            }
        case Types.ACTION_FETCH_SUCCESS:
            return {
                ...state,
                user: action.data.phone,
                age: action.data.email,
                isLoading: false
            }
        case Types.ACTION_FETCH_ERROR:
            return {
                ...state,
                user: null,
                age: null,
                isLoading: false
            }
        default:
            return state;
    }
}

