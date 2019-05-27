import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deletePost } from '../../actions/postActions';
import { FaTrashAlt } from 'react-icons/fa';


function Post({ post }) {
  return (
    <div style={{ margin: '20px' }}>
      <Link to={`/posts/${post.id}`}>
        <div>
          <h2>{post.title}</h2>
        </div>
          <FaTrashAlt onClick={deletePost.bind(null, post.id)} />
      </Link>
    </div>
  );
}
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
