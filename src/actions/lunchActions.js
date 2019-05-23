export const ADD_DRINK = 'ADD_DRINK';
export const REMOVE_DRINK = 'REMOVE_DRINK';
export const ADD_SANDWICH = 'ADD_SANDWICH';
export const REMOVE_SANDWICH = 'REMOVE_SANDWICH';
export const ADD_DESSERT = 'ADD_DESSERT';
export const REMOVE_DESSERT = 'REMOVE_DESSERT';

export const addDrink = drink => ({
  type: 'ADD_DRINK',
  payload: drink
});
export const addSandwich = sandwich => ({
  type: 'ADD_SANDWICH',
  payload: sandwich
});
export const addDessert = dessert => ({
  type: 'ADD_DESSERT',
  payload: dessert
});
export const removeDrink = () => ({
  type: 'REMOVE_DRINK'
});
export const removeSandwich = () => ({
  type: 'REMOVE_SANDWICH'
});
export const removeDessert = () => ({
  type: 'REMOVE_DESSERT'
});
