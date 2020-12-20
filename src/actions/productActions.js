import Axios from 'axios';
import * as actionTypes from '../actionTypes/productActionTypes';

export const loadProducts = (catID) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ALL_PRODUCTS_REQ });
    const { data } = await Axios.get(
      'https://mystall-backend-7q29l.ondigitalocean.app/api/products/' + catID
    );
    dispatch({ type: actionTypes.ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.ALL_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const loadSingleProduct = (catName, prodID) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_REQ });
    const { data } = await Axios.get(`/api/products/${catName}/${prodID}`);
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};
