import Head from 'next/head'
import Link from 'next/link'
export default function MainTemplate({ children }) {
  return (
    <>
      <Head>
        <title>Blog Ignacio Cuadra</title>
        <meta name="description" content="Blog de Ignacio Cuadra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="my-5 px-5">
        <div className="container max-w-6xl mx-auto flex py-2 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white bg-black aspect-square w-10 flex items-center justify-center">
            IC
          </Link>
          <nav>
            <Link href="/" className="p-5">
              Inicio
            </Link>
          </nav>
        </div>
      </header>
      <main className="container max-w-6xl mx-auto px-5">{children}</main>
      <footer className="mt-10">
        <small className="block text-center text-neutral-500">
          Desarrollado por Ignacio Cuadra
        </small>
      </footer>
    </>
  )
}
