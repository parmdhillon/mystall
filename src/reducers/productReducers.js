import * as actionType from '../actionTypes/productActionTypes';

export const allProductsReducer = (
  state = { loading: false, products: [] },
  action
) => {
  switch (action.type) {
    case actionType.ALL_PRODUCTS_REQ:
      return {
        loading: true,
        products: [],
        error: false,
      };

    case actionType.ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case actionType.ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
