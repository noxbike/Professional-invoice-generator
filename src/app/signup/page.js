'use client';
import { useState } from "react";

export default function SignUp () {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        if(!email || !password || !password2 || !username) {
            setError("Please fill all the fields");
            return;
        }
        if(password !== password2) {
            setError("Passwords do not match");
            return;
        }

        try{
            const response = fetch("/signup/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            })
            return window.location.href = "/login";
        } catch(error) {
                setError(error.message);
        };
    }

    return(
        <div className="flex flex-col justify-center items-center text-black bg-gray-50 min-h-screen">
            <h2 className="text-center text-2xl">Register</h2>
            <form onSubmit={handleRegister} className="min-w-md p-8 bg-white shadow-md rounded-xl border border-gray-100">
                <p className="text-red-500 text-center">{error}</p>
                <div className="grid gap-6 mb-6 md:grid-cols-1">
                    <div className="mb-6">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe" required />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm your password</label>
                        <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" id="password2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                    </div> 
                    <div className="text-center">
                    <button type="submit" className="w-full py-2.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    </div>
                </div>
            <p className="text-center text-gray-500">You already have an account? <a href="/login">Sign in</a></p>
            </form>
        </div>
    )
}