import { createStore } from 'redux';
import { addDrink, addSandwich, addDessert, removeDrink, removeSandwich, removeDessert } from './actions/lunchActions';

const initialState = {
  drink: null,
  sandwich: null,
  dessert: null,
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'ADD_DESSERT':
      return { ...state, dessert: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: null };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: null };
    case 'REMOVE_DESSERT':
      return { ...state, dessert: null };
    default: 
      return state;
  }
}
const store = createStore(reducer);

store.dispatch(addDrink('water'));

console.log('added drank', store.getState());

store.dispatch(addSandwich('BLT'));

console.log('added sandwich', store.getState());

store.dispatch(addDessert('apple pie'));

console.log('added dessert', store.getState());

store.dispatch(removeDrink(null));

console.log('remove drink', store.getState());

store.dispatch(removeSandwich(null));

console.log('remove sandwich', store.getState());

store.dispatch(removeDessert(null));

console.log('remove dessert', store.getState());
