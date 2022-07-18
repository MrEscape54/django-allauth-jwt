import {
    SIGNUP_SUCCESS,
    SIGUP_FAIL
} from '../actions/types'

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    loading: false
}

export default function Auth(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SIGNUP_SUCCESS:
        case SIGUP_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            }

        default:
            return state
    }
}