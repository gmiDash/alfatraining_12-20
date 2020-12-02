import React, {ReactElement} from 'react'

// import { posts } from '../shared/posts'
import Post from '../types/Post'
import PostListItem from './PostListItem'
import {usePostApi} from '../PostApi'
import {Store} from '../store'

interface Props {
  onAddToFavorite: (post: Post) => void
  onRemoveFromFavorite: (post: Post) => void
  store: Store
}

export default function PostList(props: Props): ReactElement {
  const posts = usePostApi<Post[]>('get', 'posts')

  if (!posts) {return <p>Lade Daten</p>}

  return (
    <div className="ui cards">
      {
        posts.map(post => <PostListItem store={props.store} onAddToFavorite={props.onAddToFavorite} onRemoveFromFavorite={props.onRemoveFromFavorite} post={post} key={post.id} />)
      }
    </div>
  )
}
