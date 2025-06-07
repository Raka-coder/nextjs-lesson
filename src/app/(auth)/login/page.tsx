import Link from 'next/link'
import React from 'react'

function LoginPage() {
  return (
    <div>
      <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">Login</h1>
            <p>Login a new account here.</p>
            <form className="mt-4">
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>
                <input type="text" id="username" className="w-full p-2 border rounded" placeholder="Enter your username" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                <input type="password" id="password" className="w-full p-2 border rounded" placeholder="Enter your password" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              <Link href="/dashboard">Login</Link>
            </button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage
