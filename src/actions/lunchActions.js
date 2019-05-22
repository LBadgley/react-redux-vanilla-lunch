export const ADD_DRINK = 'ADD_DRINK';
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
export const removeDrink = drink => ({
  type: 'REMOVE_DRINK'
});
export const removeSandwich = sandwich => ({
  type: 'REMOVE_SANDWICH'
});
export const removeDessert = dessert => ({
  type: 'REMOVE_DESSERT'
});
