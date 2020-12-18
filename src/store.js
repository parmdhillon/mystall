import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
  currentCategoryReducer,
  allCategoryReducer,
} from './reducers/categoryReducer';

const middleware = [thunk];

const initialState = {
  currentCategory: {
    catName: '',
    _id: '',
  },
};

export const store = createStore(
  combineReducers({
    currentCategory: currentCategoryReducer,
    allCategories: allCategoryReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
