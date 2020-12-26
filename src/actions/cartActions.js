import Axios from 'axios';
import * as actionTypes from '../actionTypes/cartActions';
import API_SERVER from '../apiServer.js';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`${API_SERVER}/api/products/category/${id}`);

  if (!data?._id) return;

  dispatch({
    type: actionTypes.CART_ADD_ITEM,
    payload: {
      id: data._id,
      name: data.name,
      image: data.img,
      price: data.price,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
