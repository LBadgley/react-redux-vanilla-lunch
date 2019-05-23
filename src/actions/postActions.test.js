import { CREATE_POST, DELETE_POST, createPost, deletePost, updatePost, UPDATE_POST } from './postActions';

describe('post testing', () => {
  it('can create a post', () => {
    const fakeTitle = 'My First Blog';
    const fakeBody = 'blogstuff';
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
  it('updates a post via id', () => {
    const id = '001';
    const fakeBody = 'new blogstuff';
    expect(updatePost('001', fakeBody)).toEqual({
      type: UPDATE_POST,
      payload: { id, body: fakeBody } 
    });
  });
});
