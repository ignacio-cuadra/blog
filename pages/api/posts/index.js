import fs from 'fs'
import * as matter from 'gray-matter'

export default function handler(req, res) {
  const files = fs.readdirSync('posts')
  const posts = files.map((file) => {
    const slug = file.replace('.md', '')
    const fileContent = fs.readFileSync(`posts/${file}`, 'utf-8')
    const { data: metadata } = matter(fileContent)
    return { slug, metadata }
  })
  res.status(200).json({ posts })
}
