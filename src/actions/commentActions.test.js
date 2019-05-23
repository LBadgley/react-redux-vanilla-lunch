import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

describe('comment actions test', () => {
  it('handles the CREATE_COMMENT action', () => {
    expect(createComment(0, 'My comment')).toEqual({
      type: CREATE_COMMENT,
      payload: { postId: 0, comment: 'My comment' }
    });
  });
  
});
