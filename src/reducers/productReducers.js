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

export const singleProductReducer = (
  state = { loading: false, product: [] },
  action
) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_REQ:
      return {
        loading: true,
        product: [],
        error: false,
      };

    case actionType.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };

    case actionType.GET_PRODUCT_FAIL:
      return {
        loading: false,
        product: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
