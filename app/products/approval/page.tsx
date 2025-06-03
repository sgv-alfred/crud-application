"use client";

import { useState, useEffect } from "react";

type Product = {
  id: number;
  Name: string;
  Price: number;
  Description: string;
  image?: string; // Optional if image is not from DB
};

export default function ApprovalPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Send POST request with { status: 1 } to filter approved products maybe
        const res = await fetch("/api/product/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify({ status: 0 }), // adjust status as needed
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }

        const data = await res.json();

        // Assuming data is an array of products
        setProducts(data.data);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);



  const handleApprove = async (id: number) => {
     const res = await fetch("/api/product/approve", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify({ id: id }), // adjust status as needed
        });
     setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleReject = async (id: number) => {
     const res = await fetch("/api/product/reject", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify({ id: id }), // adjust status as needed
        });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  if (loading) return <p className="text-center p-6">Loading products...</p>;
  if (error)
    return <p className="text-center p-6 text-red-600">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Pending Products
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No pending products 🎉</p>
        )}

        {products.map((product) =>
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
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.Name}
                </h2>
                <p className="text-sm text-gray-600">{product.Description}</p>
                <p className="mt-2 text-blue-600 font-bold">
                PHP {Number(product.Price).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleApprove(product.id)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(product.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          
        )}
      </div>
    </div>
  );
}
