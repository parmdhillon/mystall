import Axios from 'axios';
import * as actionTypes from '../actionTypes/productActionTypes';

export const loadProducts = (catID) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ALL_PRODUCTS_REQ });
    const { data } = await Axios.get('/api/products/' + catID);
    dispatch({ type: actionTypes.ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: actionTypes.ALL_PRODUCTS_FAIL,
      payload: error,
    });
  }
};
