import { getPosts, getPost } from './postSelectors';

describe('post selector test', () => {
  it('gets all posts', () => {
    const state = {
      posts: [
        { title: 'post1', body: 'body1' },
        { title: 'post2', body: 'body2' }
      ]
    };

    expect(getPosts(state)).toEqual([
      { id: 0, title: 'post1', body: 'body1' },
      { id: 1, title: 'post2', body: 'body2' }
    ]);
  });
  it('gets a post by index', () => {
    const state = {
      posts: [
        { title: 'post1', body: 'body1' },
        { title: 'post2', body: 'body2' }
      ]
    };

    expect(getPost(state, 0)).toEqual({ id: 1, title: 'post1', body: 'body1' });
  });
});
