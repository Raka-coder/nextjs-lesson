import Link from 'next/link'
import React from 'react'

function DashboardPage() {
  return (
    <div className='flex flex-col p-4 bg-gray-100 min-h-screen'>
      <header className="flex flex-col mb-4">
        <h1 className="text-2xl font-bold">Halaman Dashboard</h1>
        <p>Selamat datang di dasbor Anda!</p>
      </header>
      {/* <div className="p-4 bg-gray-400 rounded-lg"> */}
        <Link href="/product" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          Pergi ke Halaman Produk
        </Link>
      </div>
    // </div>
  )
}

export default DashboardPage
