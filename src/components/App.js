import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
// import AllPosts from '../containers/post/AllPosts';
// import CreatePost from '../containers/post/CreatePost';
import PostById from '../containers/post/PostById';
import Home from './Home';

export default function App() {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/posts/:id" component={PostById} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}
