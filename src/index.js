import { createStore } from 'redux';

const initialState = {
  lunchBox: 'empty'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case: 'ADD_DRINK':
      return { payload: 'malbec' };
      default: 
        return state;
  }
}
const store = createStore(reducer);
