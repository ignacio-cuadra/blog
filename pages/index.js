import { useEffect, useState } from 'react'
import PostList from '../components/posts/PostList'
import MainTemplate from '../components/templates/MainTemplate'

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then(({ posts }) => {
        setPosts(posts)
        console.log(posts)
      })
  }, [])

  return (
    <MainTemplate>
      <h1 className="text-4xl mb-5">Últimos posts</h1>
      <PostList posts={posts} />
    </MainTemplate>
  )
}
