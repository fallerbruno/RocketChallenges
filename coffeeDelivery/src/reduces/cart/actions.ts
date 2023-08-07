/* eslint-disable no-unused-vars */

import { coffeeCartType } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = ' REMOVE_COFFEE',
  UPDATE_LIST = 'UPDATE_LIST',
  REMOVE_ALL = 'REMOVE_ALL',
}

export function addCoffeeAction(newCoffee: coffeeCartType) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffeeAction(removeCoffee: coffeeCartType) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      removeCoffee,
    },
  }
}

export function updateListAction(updateList: coffeeCartType) {
  return {
    type: ActionTypes.UPDATE_LIST,
    payload: {
      updateList,
    },
  }
}

export function removeAllAction() {
  return {
    type: ActionTypes.REMOVE_ALL,
  }
}
