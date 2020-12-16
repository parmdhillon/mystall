import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { categoryReducer } from './reducers/categoryReducer';

const middleware = [thunk];

const initialState = {
  category: {
    catName: 'Veggies',
  },
};

export const store = createStore(
  combineReducers({
    category: categoryReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
