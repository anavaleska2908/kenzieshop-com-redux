import { ADD_CART, SUB_CART } from './actionTypes';

export const addToCart = (product) => ({
  type: ADD_CART,
  product,
});

export const subFromCart = (product) => ({
  type: SUB_CART,
  product,
});
