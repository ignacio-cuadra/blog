import { useEffect, useState } from 'react'
import MainTemplate from '../../components/templates/MainTemplate'
import MarkdownIt from 'markdown-it'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const [post, setPost] = useState(undefined)
  useEffect(() => {
    if (!router.isReady) return
    const { slug } = router.query
    console.log(slug)
    fetch(`/api/posts/${slug}`)
      .then((response) => response.json())
      .then(({ post }) => {
        setPost(post)
      })
  }, [router.isReady])
  const md = new MarkdownIt()
  if (!post) return <MainTemplate>Loading...</MainTemplate>
  return (
    <MainTemplate>
      <div className="container max-w-6xl  mx-auto grid grid-cols-3 gap-5 px-5">
        <main className="col-span-2">
          <div
            className="mx-auto prose max-w-none w-full "
            dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div>
        </main>
        <aside>
          <div className="p-5 bg-neutral-50">
            <span className="block text-gray-500">Autor</span>
            <span className="block font-bold">Ignacio Cuadra</span>
            <span className="block italic text-gray-500 my-1">Igeniero de Software</span>
            <p className="block text-justify text-sm">
              Soy programador y un escritor frustrado, amo a los animales y me gusta leer fantasia y
              ciencia ficción
            </p>
          </div>
        </aside>
      </div>
    </MainTemplate>
  )
}
