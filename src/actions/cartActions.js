import Axios from 'axios';
import * as actionTypes from '../actionTypes/cartActions';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/category/${id}`);

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
