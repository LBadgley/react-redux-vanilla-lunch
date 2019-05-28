import { CREATE_POST, DELETE_POST, UPDATE_POST } from '../actions/postActions';

const initialState =  { posts: [] };

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST:
      return { ...state, posts: [
        ...state.posts.slice(0, action.payload),
        ...state.posts.slice(action.payload + 1)
      ]};
    case UPDATE_POST:
      return { ...state, posts: [
        ...state.posts.slice(0, action.payload.id),
        {
          ...state.posts[action.payload.id],
          body: action.payload.body
        },
        ...state.posts.slice(action.payload.id + 1)
      ]};
    default:
      return state;
  }
}
