import { connect } from 'react-redux';
import Posts from '../../components/posts/Posts';
import { getPosts } from '../../selectors/postSelectors';

/* connect posts to Redux and pass it the posts and set it to the posts of a given state */
const mapStateToProps = state => ({
  posts: getPosts(state)
});

export default connect(
  mapStateToProps
)(Posts);
