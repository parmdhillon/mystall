import Axios from 'axios';
import * as actionTypes from '../actionTypes/productActionTypes';
import API_SERVER from '../apiServer';

export const loadProducts = (catID) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ALL_PRODUCTS_REQ });
    const { data } = await Axios.get(`${API_SERVER}/api/products/${catID}`);
    dispatch({ type: actionTypes.ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.ALL_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : 'Something went wrong',
    });
  }
};

export const randomProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ALL_PRODUCTS_REQ });
    const { data } = await Axios.get(`${API_SERVER}/api/products/random`);
    dispatch({ type: actionTypes.ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.ALL_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : 'Something went wrong',
    });
  }
};

export const searchProducts = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ALL_PRODUCTS_REQ });

    const config = {
      method: 'post',
      url: `${API_SERVER}/api/products/search`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: { keyword },
    };

    const { data } = await Axios(config);
    dispatch({ type: actionTypes.ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.ALL_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : 'Something went wrong',
    });
  }
};

export const loadSingleProduct = (catName, prodID) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_REQ });
    const { data } = await Axios.get(
      `${API_SERVER}/api/products/${catName}/${prodID}`
    );
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : 'Something went wrong',
    });
  }
};