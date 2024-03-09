'use client'
import { Api } from '@/app/Api';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`${Api}/login`)
            console.log(data)
            if (data.loginDetails.email !== email || data.loginDetails.password !== password) {
                alert("Incorrect Email or Password");
            }

            else {
                type dataType = {
                    email: string;
                    password: string;
                }
                const data: dataType = { email: email, password: password }
                localStorage.setItem('LOGIN', JSON.stringify(data.email));
                router.push('/movieForm')
            }
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">

            <div className="max-w-md w-full bg-white shadow-md rounded-md p-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Sign in to your account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}
