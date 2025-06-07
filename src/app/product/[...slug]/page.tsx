import React from 'react'

type DetailProductPageProps = {
    params: {
        slug: string
    }
}

function DetailProductPage({ params }: DetailProductPageProps) {
  return (
    <div>
      <h1>Detail Product Page</h1>
      <p>Product Slug: {params.slug[0]}</p>
      <p>Product Drink: {params.slug[1]}</p>
      <p>Variant: {params.slug[2]}</p>
    </div>
  )
}

export default DetailProductPage
