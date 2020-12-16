import * as actionType from '../actionTypes/categoryActionTypes';

export const categoryReducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_CATEGORY:
      return {
        ...state,
        catName: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
