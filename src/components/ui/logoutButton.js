import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/" });
        router.push("/login");
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