
// you get no errors when you change this to state.map((post, id)).. but none of the posts are responsive...
export const getPosts = (state) => {
  return state.posts.map((post, id) => ({
    ...post,
    id
  }));
};

export const getPost = (state, id) => getPosts(state)[id];
