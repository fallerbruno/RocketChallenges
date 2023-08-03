/* eslint-disable no-unused-vars */

import { coffeeCartType } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = ' REMOVE_COFFEE',
}

export function addCoffee(newCoffee: coffeeCartType) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffee(removeCoffee: coffeeCartType) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      removeCoffee,
    },
  }
}
