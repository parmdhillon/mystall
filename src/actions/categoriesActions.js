import Axios from 'axios';
import * as actionTypes from '../actionTypes/categoryActionTypes.js';

export const loadCategories = () => async (dispatch) => {
  try {
    const { data } = await Axios.get('/api/categories');
    dispatch({ type: actionTypes.SET_ALL_CATEGORIES_SUCCESS, payload: data });
    dispatch({
      type: actionTypes.SET_CURRENT_CATEGORY,
      payload: { _id: data[0]._id, catName: data[0].name },
    });
  } catch (error) {
    console.log(error);
  }
};
