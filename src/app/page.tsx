import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p>This is a simple Next.js website built with Turbopack.</p>
        <div className="mt-4 space-x-4">
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Home

