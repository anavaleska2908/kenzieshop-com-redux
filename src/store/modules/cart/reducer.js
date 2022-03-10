import { ADD_CART, SUB_CART } from './actionTypes';

const currentSale = JSON.parse(localStorage.getItem('@kenzieshop:cart')) || [];

export const cartReducer = (state = currentSale, action) => {
  switch (action.type) {
    case ADD_CART:
      console.log(state);
      return [...action.product];

    case SUB_CART:
      return [...action.product];

    default:
      return state;
  }
};
