import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <p>{post.title}</p>
  );
}
/* why is it nested like this? */
/*---- is it because title is a property of post?*/
Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
