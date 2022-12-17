import Link from 'next/link'
export default function PostBox({ post }) {
  return (
    <Link className=" block p-2" href={`/posts/${post.slug}`}>
      <>
        <div className="w-full aspect-video bg-neutral-200 mb-2"></div>
        <span className="text-lg font-semibold">{post.metadata.title}</span>
        <p>{post.metadata.description}</p>
      </>
    </Link>
  )
}
