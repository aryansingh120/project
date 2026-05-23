'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create a mock user token
    const user = { email, id: Math.random().toString(36).substr(2, 9) };
    const token = Buffer.from(JSON.stringify(user)).toString('base64');

    // Set the auth token in a cookie
    document.cookie = `auth-token=${token}; path=/; max-age=86400`;

    // Redirect to callback URL or home
    setTimeout(() => {
      router.push(callbackUrl);
    }, 500);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #f0f9ff, #e0e7ff)' }}>
      <div style={{ width: '100%', maxWidth: '448px', padding: '32px', background: 'white', borderRadius: '8px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', color: '#111827', marginBottom: '32px' }}>Login</h1>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              style={{ width: '100%', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '16px', outline: 'none' }}
            />
          </div>

          <div>
            <label htmlFor="password" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{ width: '100%', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '16px', outline: 'none' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ width: '100%', background: loading ? '#9ca3af' : '#4f46e5', color: 'white', fontWeight: '600', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontSize: '16px' }}
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

        <p style={{ textAlign: 'center', color: '#4b5563', fontSize: '14px', marginTop: '24px' }}>
          Demo: Use any email and password
        </p>
      </div>
    </div>
  );
}
