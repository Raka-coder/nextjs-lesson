import Link from 'next/link'
import React from 'react'

export default async function ProductPage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
  });

  const data = await res.json();

  return (
    <div className='container-fluid mx-auto p-4'>
      <div className='flex justify-between items-center mb-8'>
        <Link href="/dashboard" className='text-blue-500 hover:underline'>Back to Dashboard</Link>
        <h1 className='text-4xl font-bold'>Product Page</h1>
        <h1 className='text-xl font-normal'>{data.length} Products Found</h1>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {data.map((product: any) => (
          <div key={product.id} className='bg-white rounded-lg shadow-xl p-4'>
            <img src={product.image} alt={product.title} className='w-full h-48 object-cover mb-4' />
            <h3 className='text-lg font-semibold truncate mb-2'>{product.title}</h3>
            <span className='text-gray-600'>Category: {product.category}</span>
            <br />
            <span className='text-gray-600'>Rating: {product.rating.rate}</span>
            <span className='text-gray-600'> ({product.rating.count} reviews)</span>
            <p className='text-gray-600 truncate mb-4'>{product.description}</p>
            <p className='text-gray-800 font-semibold'>Price: ${product.price}</p>
            <Link href={`/product/${product.id}`} className='text-white mt-2 inline-block bg-blue-500 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600'>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

