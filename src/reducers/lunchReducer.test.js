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
});
