import Link from 'next/link'
import React from 'react'

function DashboardPage() {
  return (
    <div>
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">Dashboard Settings</h1>
            <p>Manage your dashboard settings here.</p>
            <Link href="/product" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                Go to Product Page
            </Link>
        </div>
    </div>
  )
}

export default DashboardPage
