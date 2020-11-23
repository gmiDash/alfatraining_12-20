import React, { ReactElement } from 'react';
import Post from '../types/Post';

interface Props {
  readonly post: Post
  onClickedPostItem: (post: Post) => void
}

export default function PostListItem(props: Props): ReactElement {
  const post = props.post
  return (
    <div onClick={() => props.onClickedPostItem(post)} className="card">
      <div className="content">
        <div className="header">
          {post.title}
        </div>
        <div className="description">
          {post.body}
        </div>
      </div>
      <div className="extra content">
        User Id: {post.userId}
        {' '}
        Post Id: {post.id}
      </div>
    </div>
  )
}
