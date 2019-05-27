const CREATE_POST = 'CREATE_POST';

const createPost = (title, body) => ({
  type: CREATE_POST,
  payload: { title, body }
});

const DELETE_POST = 'DELETE_POST';
const deletePost = id => ({
  type: DELETE_POST,
  payload: id
});

const UPDATE_POST = 'UPDATE_POST';
const updatePost = (id, body) => ({
  type: UPDATE_POST,
  payload: { id, body }
});

export {
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  createPost,
  deletePost,
  updatePost
};
