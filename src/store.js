import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';

import {
  currentCategoryReducer,
  allCategoryReducer,
} from './reducers/categoryReducer';

import {
  allProductsReducer,
  singleProductReducer,
} from './reducers/productReducers';

const middleware = [thunk];

const localCurrentCat = () => {
  try {
    return localStorage.getItem('current_cat')
      ? JSON.parse(localStorage.getItem('current_cat'))
      : null;
  } catch (error) {
    return null;
  }
};

const localCart = () => {
  try {
    return localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : null;
  } catch (error) {
    return null;
  }
};

const initialState = {
  currentCategory: localCurrentCat(),
  cart: { cartItems: localCart() },
};

export const store = createStore(
  combineReducers({
    currentCategory: currentCategoryReducer,
    allCategories: allCategoryReducer,
    allProducts: allProductsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
