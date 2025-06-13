import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
        <p className="text-center">This is a simple Next.js website built with Turbopack.</p>
        <div className="mt-4 flex space-x-4 justify-center">
          <Link href="/register">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
              Register
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

