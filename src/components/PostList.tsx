import React, { ReactElement, useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

// import { posts } from '../shared/posts'
import Post from '../types/Post'
import PostListItem from './PostListItem'

interface Props {
  onClickedPostItem: (post: Post) => void
}

export default function PostList(props: Props): ReactElement {
  const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    axios.get<Post[]>('http://jsonplaceholder.typicode.com/posts')
      .then((resp: AxiosResponse<Post[]>) => setPosts(resp.data))
  }, [])

  if (!posts) { return <p>Lade Daten</p>}

  return (
    <div className="ui cards">
      {
        posts.map(post => <PostListItem post={post} key={post.id} onClickedPostItem={props.onClickedPostItem} />)
      }
    </div>
  )
}
