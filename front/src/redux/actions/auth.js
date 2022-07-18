import {
    SIGNUP_SUCCESS,
    SIGUP_FAIL
} from './types'

import axios from 'axios'

export const signup = (email, password1, password2) => async dispath => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify({
        email,
        password1,
        password2
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/registration/`, body, config)
        if (res.status === 201) {
            dispath({
                type: SIGNUP_SUCCESS,
                payload: res.data
            })
        } else {
            dispath({
                type: SIGUP_FAIL
            })
        }
    }

    catch (err) {
        dispath({
            type: SIGUP_FAIL
        })
    };
};

