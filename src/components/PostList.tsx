import React, { ReactElement } from 'react'
import { posts } from '../shared/posts'
import Post from '../types/Post'
import PostListItem from './PostListItem'

interface Props {
  onClickedPostItem: (post: Post) => void
}

export default function PostList(props: Props): ReactElement {
  return (
    <div className="ui cards">
      {
        posts.map(post => <PostListItem post={post} key={post.id} onClickedPostItem={props.onClickedPostItem} />)
      }
    </div>
  )
}
