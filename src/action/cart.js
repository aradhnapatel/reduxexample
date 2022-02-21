import {ADD_TO_CART, REMOVE_FROM_CART} from '../utils/constant';

export const Cart = item => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const Book = item => ({
  type: ADD_TO_CART,
  payload: item,
});
