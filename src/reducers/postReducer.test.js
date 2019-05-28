import { createPost, deletePost, updatePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer tests', () => {
  it('handles the CREATE_POST action', () => {
    const newState = reducer({ posts: [] }, createPost('My new post', 'Is a thing?'));
    expect(newState).toEqual({
      posts: [
      { title: 'My new post', body: 'Is a thing?' }
    ]
  });
  });
  it('handles the DELETE_POST action', () => {
    const initialState = { posts: [
      { title: 'My new post', body: 'Is a thing?' },
      { title: 'My new new post', body: 'Is a another thing?' },
      { title: 'My new new new post', body: 'Is a another another thing?' }
    ]};
    const newState = reducer(initialState, deletePost(1));

    expect(newState).toEqual({ posts: [
      { title: 'My new post', body: 'Is a thing?' },
      { title: 'My new new new post', body: 'Is a another another thing?' }
    ]});
  });
  it('handles the UPDATE_POST action', () => {
    const initialState = { posts: [
      { title: 'My new post', body: 'Is a thing?' },
      { title: 'My new new post', body: 'Is a another thing?' },
      { title: 'My new new new post', body: 'Is a another another thing?' }
    ]};
    const newState = reducer(initialState, updatePost(1, 'TIS UPDATED'));

    expect(newState).toEqual({ posts: [
      { title: 'My new post', body: 'Is a thing?' },
      { title: 'My new new post', body: 'TIS UPDATED' },
      { title: 'My new new new post', body: 'Is a another another thing?' }
    ]});
  });
});
