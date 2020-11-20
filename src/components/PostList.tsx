import React, {ReactElement} from 'react'
import {posts} from '../shared/posts'
import PostListItem from './PostListItem'

export default function PostList(): ReactElement {
  return (
    <div className="ui cards">
      {
        posts.map(post => <PostListItem post={post} key={post.id} />)
      }
    </div>
  )
}
