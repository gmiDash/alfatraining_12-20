import React, {ReactElement, useState} from 'react';
import PostList from './PostList'
import ClassCounter from './ClassCounter'
import FunctionalCounter from './FunctionalCounter'
import Post from '../types/Post';
import PostDetails from './PostDetails';
import Clock from './Clock';

export default function App(): ReactElement {

  const [showCounter, setShowCounter] = useState(true)
  const [post, setPost] = useState<Post>()

  const onClickedPostItem = (postParam: Post): void => {
    setPost(post ? undefined : postParam)
  }

  return (
    <div className="ui container">
      <Clock />
      { showCounter && <FunctionalCounter startValue={4} />}
      { /*< ClassCounter startValue={4} /> */}
      {
        post
          ? <PostDetails post={post} onClickedPostItem={onClickedPostItem} />
          : <PostList onClickedPostItem={onClickedPostItem} />
      }
    </div>
  );
}
