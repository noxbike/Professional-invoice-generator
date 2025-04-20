import { signOut } from "next-auth/react";

export default function LogoutButton() {

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/" });
    };
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            onClick={handleLogout}
        >
            Logout
        </button>
    );
}