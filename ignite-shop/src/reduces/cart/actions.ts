import { cartType } from "./reducer"


export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = ' REMOVE_FROM_CART',
}

export function addToCartAction(cart: cartType) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
        cart,
    },
  }
}

export function RemoveFromCartAction(cart: cartType) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
        cart,
    },
  }
}