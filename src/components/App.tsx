import React, { ReactElement } from 'react';
import PostList from './PostList'
import ClassCounter from './ClassCounter'
import Post from '../types/Post';

export default function App(): ReactElement {
  const onClickedPostItem = (post: Post): void => {
    console.log('post', post)
  }

  return (
    <div className="ui container">
      <ClassCounter startValue={4} />
      <PostList onClickedPostItem={onClickedPostItem} />
    </div>
  );
}
