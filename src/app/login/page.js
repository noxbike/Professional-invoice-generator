'use client';
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const result = await signIn("credentials", { 
            redirect: false,
            email,
            password,
            callbackUrl: '/company_info' 
        });

        if(result?.error) {
            setError(result.error);
        } else if(result?.ok) {
            router.push(result.url || callbackUrl);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center text-black bg-gray-50 min-h-screen">
            <h2 className="text-center text-2xl">Login page</h2>
            <p className="text-red-500">{error}</p>
            <form onSubmit={handleLogin} className="min-w-md p-8 bg-white shadow-md rounded-xl border border-gray-100">
                <div className="grid gap-6 mb-6 md:grid-cols-1">
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                    </div> 
                    <div className="text-center">
                    <button type="submit" className="w-full py-2.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    </div>
                </div>
            <p className="text-center text-gray-500">Don&apos;t have an account? <a href="/signup">Sign up</a></p>
            </form>
        </div>
    )
}