import PostBox from './PostBox'

export default function PostList({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {posts.map((post) => (
        <PostBox key={post.slug} post={post} />
      ))}
    </div>
  )
}
