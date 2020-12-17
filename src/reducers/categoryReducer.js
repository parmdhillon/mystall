import * as actionType from '../actionTypes/categoryActionTypes';

export const currentCategoryReducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_CURRENT_CATEGORY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const allCategoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case actionType.SET_ALL_CATEGORIES_REQ:
      return {
        loading: true,
        categories: [],
      };
    case actionType.SET_ALL_CATEGORIES_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
        error: false,
      };
    case actionType.SET_ALL_CATEGORIES_FAIL:
      return {
        loading:false,
        categories:[],
        error:action.payload
      };
    default:
      return {
        ...state,
      };
  }
};
