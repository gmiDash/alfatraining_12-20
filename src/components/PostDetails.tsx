import React, {ReactElement} from 'react'
import Post from '../types/Post'
import PostListItem from './PostListItem'

interface Props {
    post: Post
    onClickedPostItem: (post: Post) => void
}

export default function PostDetails(props: Props): ReactElement {
  return (
    <div className="ui cards">
      <PostListItem post={props.post} onClickedPostItem={props.onClickedPostItem} />
    </div>
  )
}
