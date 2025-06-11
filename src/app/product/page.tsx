import Link from 'next/link'
import React, { Suspense } from 'react'

export default async function ProductPage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
  });

  const data = await res.json();
  console.log(data);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='container mx-auto p-4'>
        <div className='flex justify-between items-center mb-8'>
          <Link href="/dashboard" className='text-blue-500 hover:underline'>Back to Dashboard</Link>
          <h1 className='text-4xl font-bold'>Product Page</h1>
          <h1 className='text-xl font-normal'>{data.length} Products Found</h1>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {data.map((product: any) => (
            <div key={product.id} className='border p-4 rounded shadow'>
              <h3 className='text-lg font-semibold mb-2'>{product.title}</h3>
              <img src={product.image} alt={product.title} className='w-full h-48 object-cover mb-2 ' />
              <span className='text-gray-800 font-normal'>Rating: {product.rating.rate}</span>
              <span className='text-gray-600'> ({product.rating.count} reviews)</span>
              <br />
              <p className='text-gray-600 truncate'>{product.description}</p>
              <p className='text-gray-800 font-normal'>Category: {product.category}</p>
              <p className='text-gray-800 font-normal'>Price: ${product.price}</p>
              <Link href={`/product/${product.id}`} className='text-blue-500 hover:underline mt-2 inline-block'>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  )
}

