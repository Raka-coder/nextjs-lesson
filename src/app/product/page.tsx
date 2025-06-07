import Link from 'next/link'
import React from 'react'

export default async function ProductPage() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);
  
  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center mb-4'>
        <Link href="/" className='text-blue-500 hover:underline'>Home</Link>
        <h1 className='text-4xl font-bold'>Product Page</h1>
        <h1 className='text-2xl font-normal'>{data.length} Products Found</h1>
      </div>
      <div className='grid grid-cols-4 gap-4'>
      {data.map((product: any) => (
        <div key={product.id} className='border p-4 rounded shadow'>
          <h3 className='text-lg font-semibold mb-2'>{product.title}</h3>
          <img src={product.image} alt={product.title} className='w-full h-48 object-cover mb-2 ' />
          <span className='text-gray-800 font-bold'>Rating: {product.rating.rate}</span>
          <span className='text-gray-600'> ({product.rating.count} reviews)</span>
          <br />
          <p className='text-gray-600'>{product.description}</p>
          <p className='text-gray-800 font-bold'>Category: {product.category}</p>
          <p className='text-gray-800 font-bold'>Price: ${product.price}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

