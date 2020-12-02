import React, {ReactElement} from 'react'

// import { posts } from '../shared/posts'
import Post from '../types/Post'
import PostListItem from './PostListItem'
import {usePostApi} from '../PostApi'

export default function PostList(): ReactElement {
  const posts = usePostApi<Post[]>('get', 'posts')

  if (!posts) {return <p>Lade Daten</p>}

  return (
    <div className="ui cards">
      {
        posts.map(post => <PostListItem post={post} key={post.id} />)
      }
    </div>
  )
}
