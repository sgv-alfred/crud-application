'use client';

import { useState  } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const token = ''


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotification(null);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || 'Login failed');
      }

      setNotification({ message: 'Login successful! Redirecting...', type: 'success' });
      setIsSubmitting(true);

      // Simulate delay and redirect
      // setTimeout(() => {
        router.push('/products');
      // }, 1500);
    } catch (err: any) {
      setNotification({ message: err.message, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-9 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">

        {token && (
        <h2 className="text-2xl font-bold text-center text-gray-800">You're already login!</h2>
        )}
        {notification && (
          <div
            className={`text-sm text-center px-4 py-2 rounded ${
              notification.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {notification.message}
          </div>
        )}
        {!token && (
          <>
        <h2 className="text-2xl font-bold text-center text-gray-800">Login to your account!</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
        </>
      )}


      </div>
    </div>
  );
}
