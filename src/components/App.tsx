import React, {ReactElement} from 'react';
import PostList from './PostList'
import ClassCounter from './ClassCounter'

export default function App(): ReactElement {
  return (
    <div className="ui container">
      <ClassCounter startValue={4} />
      <PostList />
    </div>
  );
}
