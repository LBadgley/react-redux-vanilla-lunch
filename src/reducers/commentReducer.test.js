import reducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';
import { deletePost } from '../actions/postActions';

describe('comment reducer tests', () => {
  it('handles the CREATE_COMMENT action', () => {
    const newState = reducer({}, createComment(1, 'Is this a comment?'));

    expect(newState).toEqual({
      1: ['Is this a comment?']
    });
  });
  it('handles the CREATE_COMMENT with existing comments', () => {
    const initialState = {
      1: ['hi']
    };
    const newState = reducer(initialState, createComment(1, 'Is this a comment?'));

    expect(newState).toEqual({
      1: ['hi', 'Is this a comment?']
    });
  });
  it('handles the DELETE_COMMENT action', () => {
    const initialState = {
      1: ['hi', 'Is this a comment?']
    };
    const newState = reducer(initialState, deleteComment(1, 0));
    
    expect(newState).toEqual({
      1: ['Is this a comment?']
    });
  });
});
