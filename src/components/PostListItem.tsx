import React, {ReactElement, SyntheticEvent} from 'react';
import {Link} from 'react-router-dom'
import Post from '../types/Post';
import {useStore} from '../store'

interface Props {
  readonly post: Post
}

export default function PostListItem(props: Props): ReactElement {
  const post = props.post
  const {store, dispatch} = useStore()

  const onAddToFavorite = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch({type: 'AddToFavorites', post})
  }

  const onRemoveFromFavorite = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch({type: 'RemoveFromFavorites', post})
  }

  const countLikes = (): number => {
    return store.favorites.filter(favoritPost => favoritPost.id === post.id).length
  }

  return (
    <Link to={`/posts/${post.id}`} className="card">
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
        <div className="ui labeled button">
          <div onClick={onAddToFavorite} className="ui icon button">
            <i className="thumbs green up icon" />
          </div>
          <div onClick={onRemoveFromFavorite} className="ui icon button">
            <i className="thumbs red down icon" />
          </div>
          <span className="ui basic label">
            {countLikes()}
          </span>
        </div>
      </div>
    </Link>
  )
}
