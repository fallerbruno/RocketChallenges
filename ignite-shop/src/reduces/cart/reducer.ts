import { produce } from "immer";
import { ActionTypes } from "./actions";
export interface cartType {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  defaultPriceId: string;
}

export interface cartState {
  cart: cartType[];
}

export function cartReducer(state: cartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.cart);
      });
    case ActionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter((item) => {
          return item.id !== action.payload.cart.id;
        });
      });
    default:
      return state;
  }
}
