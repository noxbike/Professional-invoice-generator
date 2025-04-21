import { signOut } from "next-auth/react";

export default function LogoutButton() {

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Finvoices" });
    };
    return (
        <button
            className= "block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none "
            onClick={handleLogout}
        >
            Logout
        </button>
    );
}