import axios from 'axios';

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: 'USER_LOADED',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'AUTH_ERROR',
    });
  }
};

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth/login', body, config);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAIL',
    });
  }
};

// Add similar actions for register, logout, etc.
