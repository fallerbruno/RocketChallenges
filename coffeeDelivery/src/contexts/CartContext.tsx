/* eslint-disable */
import { ReactNode, createContext, useReducer } from 'react'
import { cartReducer, coffeeCartType } from '../reduces/cart/reducer'
import { addCoffeeAction } from '../reduces/cart/actions'

interface CartInterfaceType {
  coffee: coffeeCartType[]
  removeCoffee: (item: coffeeCartType) => void
  addCoffee: (item: coffeeCartType) => void
}

interface CartContextPrivderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartInterfaceType)

export function CartContextProvider({ children }: CartContextPrivderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  })

  const coffee = {cartState};  

  function removeCoffee(item: coffeeCartType) {
    dispatch({
      type: 'REMOVE_COFFEE',
      payload: {
        item,
      },
    })
  }
  function addCoffee(item: coffeeCartType) {
    dispatch(addCoffeeAction(item))
    
  }

  return (
    <CartContext.Provider value={{ coffee, removeCoffee, addCoffee }}>
      {children}
    </CartContext.Provider>
  )
}
