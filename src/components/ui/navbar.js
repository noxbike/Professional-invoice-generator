'use client';
import InvoiceGen from "./invoicegen";
import Link from "next/link";
import LogoutButton from "./logoutButton";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-black">
      <div>
        <InvoiceGen />
      </div>
      {status === "authenticated" && (
        <div>
            <Link href='/setting' className="px-2">
                {session.user.username}
            </Link>
            <LogoutButton/>
        </div>
      )}
      {status != "authenticated" && <div>
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
