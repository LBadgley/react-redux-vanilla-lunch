import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts }) {
  const allPosts = posts.map(post => (
    <li key={post.id}>
      <Post post={post} />
    </li>
  ));
  console.log(posts);
  return (
    <ul>
      {allPosts}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired
};

export default Posts;
