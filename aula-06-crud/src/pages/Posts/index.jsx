import React from 'react'
import { Link } from 'react-router-dom'

export default function Posts() {
  return (
    <div>
        <h1>Posts</h1>
        <Link to="/">
        <button>Voltar pro Feed</button>
      </Link>
    </div>
  )
}
