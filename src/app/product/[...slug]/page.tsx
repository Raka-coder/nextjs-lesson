import Link from "next/link";

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.slug}`);
  const product = await res.json();

  return (
    <div>
      <Link
        href="/product"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        Back to Products
      </Link>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">{product.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-cover rounded shadow"
        />

        <div className="flex flex-col gap-4">
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-800 font-bold">
            Category: {product.category}
          </p>
          <p className="text-gray-800 font-bold">Price: ${product.price}</p>
          <span className="text-gray-800 font-bold">
            Rating: {product.rating.rate}
          </span>
          <span className="text-gray-600">
            {" "}
            ({product.rating.count} reviews)
          </span>
        </div>
      </div>
    </div>
  );
}
