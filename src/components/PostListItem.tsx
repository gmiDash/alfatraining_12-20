import React, {ReactElement, SyntheticEvent} from 'react';
import {Link} from 'react-router-dom'
import {Store} from '../store';
import Post from '../types/Post';

interface Props {
  readonly post: Post
  readonly onAddToFavorite: (post: Post) => void
  readonly onRemoveFromFavorite: (post: Post) => void
  readonly store: Store
}

export default function PostListItem(props: Props): ReactElement {
  const post = props.post

  const onAddToFavorite = (e: SyntheticEvent) => {
    e.preventDefault()
    props.onAddToFavorite(post)
  }

  const onRemoveFromFavorite = (e: SyntheticEvent) => {
    e.preventDefault()
    props.onRemoveFromFavorite(post)
  }

  const countLikes = (): number => {
    return props.store.favorites.filter(favoritPost => favoritPost.id === post.id).length
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
