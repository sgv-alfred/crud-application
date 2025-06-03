'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/user/logout', {
        method: 'POST',
        credentials: 'include',
      });

      router.push('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Product Inventory</div>
        <div className="space-x-4 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/products/approval" className="hover:text-blue-600">Approval</Link>
          <button
            onClick={handleLogout}
            className="hover:text-red-600 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
