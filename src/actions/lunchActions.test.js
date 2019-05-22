import { addDrink, ADD_DRINK, removeDrink, REMOVE_DRINK } from './lunchActions';

describe('lunch actions', () => {
  it('renders an add drink action', () => {
    expect(addDrink('water')).toEqual({
      type: ADD_DRINK,
      payload: 'water'
    });
  });
});

describe('lunch actions', () => {
  it('renders a remove drink action', () => {
    expect(removeDrink()).toEqual({
      type: REMOVE_DRINK
    });
  });
});
