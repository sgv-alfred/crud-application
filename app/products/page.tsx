"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  Name: string;
  Price: number;
  Description: string;
  image?: string; // Optional if image is not from DB
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/product/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify({ status: 1 }),
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.error || "Failed to fetch products");
        }

        setProducts(result.data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Product List</h1>
        <Link
          href="/products/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          + Create Product
        </Link>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image || "https://dummyimage.com/300x200/cccccc/555555&text=No+Image"}
              alt={product.Name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.Name}</h2>
              <p className="text-sm text-gray-600">{product.Description}</p>
              <div className="mt-3 text-blue-600 font-bold text-lg">
                PHP {Number(product.Price).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
