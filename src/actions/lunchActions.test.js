import { addDrink, ADD_DRINK } from './lunchActions';

describe('lunch actions', () => {
  it('renders an add drink action', () => {
    expect(addDrink('water')).toEqual({
      type: ADD_DRINK,
      payload: 'water'
    });
  });
});
