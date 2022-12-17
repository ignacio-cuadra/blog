import fs from 'fs'
import * as matter from 'gray-matter'

export default function handler(req, res) {
  const { slug } = req.query
  const fileContent = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
  const { data: metadata, content } = matter(fileContent)
  res.status(200).json({ post: { metadata, content } })
}
