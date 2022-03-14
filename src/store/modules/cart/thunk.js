import { useState } from 'react';
import { get } from 'react-hook-form';
import { addToCart, subFromCart } from './actions';
import { toast } from 'react-toastify';

export const addToCartThunk = (currentProduct) => {
  return (dispatch, getState) => {
    const { cart } = getState();

    const productCurrentSale = cart.find(
      (item) => item.id === currentProduct.id
    );

    if (productCurrentSale === undefined) {
      currentProduct.count = 1;
      const newCart = [...cart, currentProduct];
      dispatch(addToCart(newCart));
      toast.success('Produto adicionado com sucesso!');
    } else {
      const indexProduct = cart.findIndex(
        (item) => item.id === currentProduct.id
      );
      cart[indexProduct].count += 1;
      console.log(cart[indexProduct].count);
      toast.success('Produto adicionado com sucesso!');
      dispatch(addToCart(cart));
    }
  };
};

export const subFromCartThunk = (currentProduct) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    console.log(cart);

    const filteredElement = cart.filter((item) => item !== currentProduct);
    console.log(cart);

    const indexProduct = cart.findIndex(
      (item) => item.id === currentProduct.id
    );

    if (cart[indexProduct].count > 1) {
      cart[indexProduct].count -= 1;
      dispatch(subFromCart(cart));
      console.log(cart);
    } else {
      dispatch(subFromCart(filteredElement));
    }

    toast.success('Produto removido!');
  };
};
