import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  state = {
    title: '',
    body: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { title, body } = this.state;
    this.props.onSubmit(title, body);
    this.setState({ title: '', body: '' });
  }

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" value={title} onChange={this.changeHandler} />
        <textarea name="body" value={body} onChange={this.changeHandler}></textarea>
        <button>Submit</button>
      </form>
    );
  }
}