import axios from 'axios';
import {
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from './actionTypes';

export const listProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const response = await axios.get('/api/products');
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const listProductDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAIL_REQUEST });
      const response = await axios.get(`/api/products/${id}`);
      dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAIL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
