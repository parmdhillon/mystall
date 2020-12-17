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

export const allCategoryReducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
