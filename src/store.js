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
      : {
          catName: '',
          _id: '',
        };
  } catch (error) {
    return {
      catName: '',
      _id: '',
    };
  }
};

const initialState = {
  currentCategory: localCurrentCat(),
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
