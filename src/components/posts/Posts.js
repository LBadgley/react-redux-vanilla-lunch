import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts, deletePost }) {
  console.log(posts);
  const allPosts = posts.map(post => (
    <li key={post.id} >
      <Post deletePost={deletePost} post={post} />
    </li>
  ));
  return (
    <ul>
      {allPosts}
    </ul>
  );
}

Posts.propTypes = {
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default Posts;
