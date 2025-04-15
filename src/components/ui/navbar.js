'use client';
import useAuth from "../useAuth";
import InvoiceGen from "../invoicegen";
import Link from "next/link";
import LogoutButton from "./logoutButton";

export default function Navbar() {
    const { isAuthenticated, isLoading, session } = useAuth();
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-black">
      <div>
        <InvoiceGen />
      </div>
      {isAuthenticated && (
        <div>
            <Link href='/setting' className="px-2">
                {session.user.username}
            </Link>
            <LogoutButton/>
        </div>
      )}
      {!isAuthenticated && <div>
        <Link className="text-blue-500 px-2" href={"/login"}>
          Login
        </Link>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          href="/new_invoice"
        >
          Créer votre facture
        </Link>
      </div>}
    </nav>
  );
}
