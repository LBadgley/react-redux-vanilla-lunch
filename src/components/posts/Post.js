import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deletePost } from '../../actions/postActions';
import { FaTrashAlt } from 'react-icons/fa';


function Post({ post }) {
  return (
    <div style={{ margin: '20px' }}>
      <Link to={`/posts/${post.id}`}>
        <li>
          <h2>{post.title}</h2>
          <FaTrashAlt onClick={deletePost.bind(null, post.id)} />
        </li>
      </Link>
    </div>
  );
}
/* why is it nested like this? */
/*---- is it because title is a property of post?*/
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
