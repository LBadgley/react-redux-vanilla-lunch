import {
  ADD_DRINK,
  ADD_SANDWICH,
  ADD_DESSERT,
  REMOVE_DRINK,
  REMOVE_SANDWICH,
  REMOVE_DESSERT
} from '../actions/lunchActions';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case ADD_DESSERT:
      return { ...state, dessert: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: null };
    case REMOVE_DESSERT:
      return { ...state, dessert: null };
    default:
      return state;
  }
}
