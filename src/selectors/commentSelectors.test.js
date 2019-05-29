import { getComments } from './commentSelectors';

describe('comment selector test', () => {
  it('gets all comments by post id', () => {
    const state = {
      comments: {
        3: ['hi', 'there']
      }
    };

    expect(getComments(state, 3)).toEqual(['hi', 'there']);
  });
});
