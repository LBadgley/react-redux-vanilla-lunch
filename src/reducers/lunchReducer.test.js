import reducer from './lunchReducer';
import { addDrink, addSandwich, addDessert, removeDrink, removeSandwich, removeDessert } from '../actions/lunchActions';

describe('lunch reducer', () => {
  it('handles the ADD_DRINK action', () => {
    const initialState = {
      drink: null
    };

    const updatedState = reducer(initialState, addDrink('cranberry juice'));

    expect(updatedState).toEqual({
      drink: 'cranberry juice'
    });
  });

  it('handles the REMOVE_DRINK action', () => {
    const initialState = {
      drink: 'cranberry juice'
    };
    const updatedState = reducer(initialState, removeDrink());

    expect (updatedState).toEqual({
      drink: null
    });
  });

  it('handles the ADD_SANDWICH action', () => {
    const initialState = {
      sandwich: null
    };
    const updatedState = reducer(initialState, addSandwich('tea sandwich'));

    expect (updatedState).toEqual({
      sandwich: 'tea sandwich'
    });
  });
  it('handles the REMOVE_SANDWICH action', () => {
    const initialState = {
      sandwich: 'tea sandwich'
    };
    const updatedState = reducer(initialState, removeSandwich());

    expect (updatedState).toEqual({
      sandwich: null
    });
  });
  it('handles the ADD_DESSERT action', () => {
    const initialState = {
      dessert: null
    };

    const updatedState = reducer(initialState, addDessert('strawberry shortcake'));

    expect(updatedState).toEqual({
      dessert: 'strawberry shortcake'
    });
  });
});
