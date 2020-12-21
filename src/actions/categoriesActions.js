import Axios from 'axios';
import * as actionTypes from '../actionTypes/categoryActionTypes.js';
import API_SERVER from '../apiServer.js';

export const loadCategories = (isMobile) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_ALL_CATEGORIES_REQ });
    const { data } = await Axios.get(`${API_SERVER}/api/categories`);
    dispatch({ type: actionTypes.SET_ALL_CATEGORIES_SUCCESS, payload: data });
    if (!isMobile) {
      dispatch({
        type: actionTypes.SET_CURRENT_CATEGORY,
        payload: { _id: data[0]._id, catName: data[0].name },
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.SET_ALL_CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : 'Something went wrong',
    });
  }
};
