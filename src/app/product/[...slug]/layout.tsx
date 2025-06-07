import React from 'react'

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold">Product Details</h1>
      </header>

      <main>{children}</main>

      <footer className="mt-8 border-t pt-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} My E-Commerce. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
