import { createStore } from 'redux';

const initialState = {
  
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    default: 
      return state;
  }
}
const store = createStore(reducer);

store.dispatch({ 
  type: 'ADD_DRINK',
  payload: 'Malbec'
});

console.log('added drank', store.getState());
