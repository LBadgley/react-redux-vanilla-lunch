import React from 'react';
import CreatePost from '../containers/post/CreatePost';
import AllPosts from '../containers/post/AllPosts';
import styles from './Home.css';

export default function Home() {
  return (
    <>
      <section className={styles.AllPosts}>
        <h1>Posts</h1>
        <AllPosts />
      </section>
      <section className={styles.CreatePost}>
        <h2>Write A Post</h2>
        <CreatePost />
      </section>
    </>
  );
}
