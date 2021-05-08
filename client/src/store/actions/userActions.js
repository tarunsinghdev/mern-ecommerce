import axios from 'axios';
import {
  ORDER_LIST_MY_RESET,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_RESET,
  USER_DETAIL_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from './actionTypes';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        '/api/users/login',
        { email, password },
        config
      );

      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
      localStorage.setItem('userInfo', JSON.stringify(response.data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAIL_RESET });
    dispatch({ type: ORDER_LIST_MY_RESET });
    dispatch({ type: USER_LIST_RESET });
  };
};

export const register = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        '/api/users',
        { name, email, password },
        config
      );

      dispatch({ type: USER_REGISTER_SUCCESS, payload: response.data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
      localStorage.setItem('userInfo', JSON.stringify(response.data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const getUserDetail = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_DETAIL_REQUEST });
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
        },
      };
      const response = await axios.get(`/api/users/${id}`, config);

      dispatch({ type: USER_DETAIL_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: USER_DETAIL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const updateUserProfile = (user) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_UPDATE_PROFILE_REQUEST });
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
        },
      };
      const response = await axios.put(`/api/users/profile`, user, config);

      dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const listUsers = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_LIST_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
        },
      };
      const response = await axios.get(`/api/users`, config);

      dispatch({ type: USER_LIST_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: USER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_DELETE_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
        },
      };
      await axios.delete(`/api/users/${id}`, config);

      dispatch({ type: USER_DELETE_SUCCESS });
    } catch (error) {
      dispatch({
        type: USER_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const updateUser = (user) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_UPDATE_REQUEST });
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
        },
      };
      const { data } = await axios.put(`/api/users/${user._id}`, user, config);

      dispatch({ type: USER_UPDATE_SUCCESS });
      dispatch({ type: USER_DETAIL_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
