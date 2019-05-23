import reducer from './postReducer';
import { createPost, deletePost, updatePost } from '../actions/postActions';

describe('post reducer tests', () => {
  it('handles the CREATE_POST action', () => {
    const newState = reducer([], createPost('My new post', 'Is a thing?'));
    expect(newState).toEqual([
      { title: 'My new post', body: 'Is a thing?'}
    ]);
  });
});
