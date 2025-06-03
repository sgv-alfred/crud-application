'use server';
import { cookies } from 'next/headers';

export async function  setAuthCookie(token: string) {
    const cookieStore = await cookies();
    cookieStore.set('token', token, {
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 // 1 hr
    });
}

export async function deleteAuthCookie() {
const cookieStore = await cookies();
  cookieStore.delete('token');
}

export async function getAuthToken() {
    const cookieStore = await cookies();
    return cookieStore.get('token')?.value ?? null;
}
