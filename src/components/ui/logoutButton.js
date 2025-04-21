import { signOut } from "next-auth/react";

export default function LogoutButton() {

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Finvoices" });
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