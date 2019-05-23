import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

describe('comment actions test', () => {
  it('handles the createComment action', () => {
    expect(createComment(0, 'My comment')).toEqual({
      type: CREATE_COMMENT,
      payload: { postId: 0, comment: 'My comment' }
    });
  });
  it('handles the deleteComment action', () => {
    expect(deleteComment(0, 1)).toEqual({
      type: DELETE_COMMENT,
      payload: { postId: 0, commentId: 1 }
    });
  });
});
