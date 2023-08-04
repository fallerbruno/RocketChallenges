import { produce } from 'immer'
import { ActionTypes } from './actions'
export interface coffeeCartType {
  name: string
  value: number
  amount: number
  valueTotal: number
  cartState?: coffeeCartType[]
}

export interface coffeeCartState {
  cart: coffeeCartType[]
}

export function cartReducer(state: coffeeCartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.newCoffee)
      })
    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        console.log(draft)
        // draft.cart.splice(action.payload.index, 1)
      })
    default:
      return state
  }
}
