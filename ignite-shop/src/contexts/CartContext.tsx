/* eslint-disable */
import { ReactNode, createContext, useReducer } from "react";
import { cartReducer, cartType } from "../reduces/cart/reducer";
import {
    RemoveFromCartAction,addToCartAction
} from "../reduces/cart/actions";

interface CartInterfaceType {
  cart: cartType[];
  removeFromCart: (item: cartType) => void;
  addToCart: (item: cartType) => void;
}

interface CartContextPrivderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartInterfaceType);

export function CartContextProvider({ children }: CartContextPrivderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const cart = { cartState };

  function removeFromCart(item: cartType) {
    dispatch(RemoveFromCartAction(item));
  }

  function addToCart(item: cartType) {
    dispatch(addToCartAction(item));
  }

  return (
    <CartContext.Provider
      value={{ cart: cart.cartState.cart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
