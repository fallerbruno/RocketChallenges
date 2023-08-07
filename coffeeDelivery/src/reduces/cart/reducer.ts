import { produce } from 'immer'
import { ActionTypes } from './actions'
export interface coffeeCartType {
  name: string
  value: number
  amount: number
  valueTotal: number
  cartState?: coffeeCartType[]
  image: string
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
        draft.cart = draft.cart.filter((item) => {
          return item.name !== action.payload.removeCoffee.name
        })
      })
    case ActionTypes.UPDATE_LIST:
      return produce(state, (draft) => {
        draft.cart.find((item) => {
          if (item.name === action.payload.updateList.name) {
            item.amount = action.payload.updateList.amount
            item.valueTotal =
              action.payload.updateList.amount * action.payload.updateList.value
            return item
          }
          return item
        })
      })
    case ActionTypes.REMOVE_ALL:
      return produce(state, (draft) => {
        draft.cart = []
      })
    default:
      return state
  }
}
