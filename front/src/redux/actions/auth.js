import {
  SIGNUP_SUCCESS,
  SIGUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAILED,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
} from './types'

import axios from 'axios'

export const signup = (email, password1, password2) => async dispath => {
  dispath({
    type: SET_AUTH_LOADING
  })

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
    dispath({
      type: REMOVE_AUTH_LOADING
    })
  }

  catch (err) {
    dispath({
      type: SIGUP_FAIL
    })
  };
  dispath({
    type: REMOVE_AUTH_LOADING
  })
};

export const activate = (key) => async dispath => {
  dispath({
    type: SET_AUTH_LOADING
  })

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ key });

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/registration/verify-email/`, body, config)
    if (res.status === 200) {
      dispath({
        type: ACTIVATION_SUCCESS
      })
    } else {
      dispath({
        type: ACTIVATION_FAILED
      })
    }
    dispath({
      type: REMOVE_AUTH_LOADING
    })
  }

  catch (err) {
    dispath({
      type: ACTIVATION_FAILED
    })
  };
  dispath({
    type: REMOVE_AUTH_LOADING
  })
};

