// app/products/create/page.tsx

"use client";

import { useState } from "react";

export default function CreateProductPage() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/product/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          price: parseFloat(form.price),
          quantity: parseInt(form.quantity, 10),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        console.log(data)
        throw new Error(data.error || data.message || "Something went wrong");
      }

      setSuccess(true);
      setForm({
        name: "",
        price: "",
        quantity: "",
        description: "",
        image: "",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-9">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create New Product</h1>

        {success && (
          <p className="mb-4 text-green-600 text-center">Product created successfully!</p>
        )}
        {error && (
          <p className="mb-4 text-red-600 text-center">Error: {error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price (PHP)
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              required
              min="0"
              step="1"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={3}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
