import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { FaTrashAlt } from 'react-icons/fa';


function Post({ post, deletePost }) {
  return (
    <div style={{ margin: '20px' }}>
      <Link to={`/posts/${post.id}`}>
        <div>
          <h2>{post.title}</h2>
        </div>
      </Link>
      <button onClick={deletePost.bind(null, post.id)}>Delete This Post</button>
    </div>
  );
}
Post.propTypes = {
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
