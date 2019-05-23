import { CREATE_POST, DELETE_POST, createPost, deletePost } from './postActions';

describe('post testing', () => {
  it('can create a post', () => {
    const fakeTitle = 'title';
    const fakeBody = 'bodybodybodybody';
    expect(createPost(fakeTitle, fakeBody)).toEqual({
      type: CREATE_POST,
      payload: { title: fakeTitle, body: fakeBody }
    });
  });
  it('delete a post', () => {
    const fakeTitle = 'title';
    expect(deletePost(fakeTitle)).toEqual({
      type: DELETE_POST,
      payload: { title: fakeTitle }
    });
  });
});
