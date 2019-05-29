import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';
import CommentForm from '../../components/comments/CommentForm';

const mapDispatchToProps = (dispatch, props) => ({
  onsubmit(comment){
    dispatch(createComment(props.postId, comment));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
