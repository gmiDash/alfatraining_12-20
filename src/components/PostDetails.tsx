import React, {ReactElement} from 'react'
import {useParams, useHistory} from 'react-router-dom'

import {usePostApi} from '../PostApi'
import {Store} from '../store'
import Post from '../types/Post'
import PostListItem from './PostListItem'

interface Props {
  onAddToFavorite: (post: Post) => void
  onRemoveFromFavorite: (post: Post) => void
  store: Store
}

export default function PostDetails(props: Props): ReactElement {
  const {postId} = useParams<{postId: string}>()
  const history = useHistory()
  const post = usePostApi<Post>('get', `posts/${postId}`)

  if (!post) {return <p>Lade</p>}
  console.log('history', history)

  const onGoToNext = () => {
    if (window.confirm('Sure?')) {
      history.push(`/posts/${+postId + 1}`)
    }
  }

  return (
    <>
      <div className="ui cards">
        <PostListItem post={post} onAddToFavorite={props.onAddToFavorite} onRemoveFromFavorite={props.onRemoveFromFavorite} store={props.store} />
      </div>
      <button className="ui button" onClick={onGoToNext}>Go To Next</button>
      <button className="ui button" onClick={history.goBack}>Go Back</button>
    </>
  )
}
