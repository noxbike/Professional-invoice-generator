export default function SignUp () {
    return(
        <div className="flex flex-col justify-center items-center text-black bg-gray-50 min-h-screen">
            <h2 className="text-center text-2xl">Register</h2>
            <form className="min-w-md p-8 bg-white shadow-md rounded-xl border border-gray-100">
                <div className="grid gap-6 mb-6 md:grid-cols-1">
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm your password</label>
                        <input type="password" id="password2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                    </div> 
                    <div className="text-center">
                    <button type="button" className="w-full py-2.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    </div>
                </div>
            <p className="text-center text-gray-500">You already have an account? <a href="/login">Sign in</a></p>
            </form>
        </div>
    )
}