
import * as Types from '../constants/FetchTypes'

export function fetchData(url, onSuccess, onError) {
    console.log('url=============', url)
    return dispatch => {
        dispatch(fetchLoading())
        fetch(url).then(async res => {

            let response = await res.json()
            console.log('response', response)

            dispatch(fetchSuccess(response.results[0], true))
            onSuccess(response.results[0])
        }).catch(err => {
            console.log('err', err)
            dispatch(fetchError())
        })
    }
}

function fetchLoading() {

    return {
        type: Types.ACTION_FETCH_LOADING,
    }
}


function fetchSuccess(data, isFetchingSuccess) {
    console.log('dtat', data)
    return {
        type: Types.ACTION_FETCH_SUCCESS,
        isFetchingSuccess: isFetchingSuccess,
        data: data
    }
}

function fetchError(err, isFetchingSuccess) {

    return {
        type: Types.ACTION_FETCH_ERROR,
        isFetchingSuccess: isFetchingSuccess,
        data: null
    }
}


