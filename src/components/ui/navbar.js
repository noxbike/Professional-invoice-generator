'use client';

import { useState, useEffect } from "react";
import InvoiceGen from "./invoicegen";
import Link from "next/link";
import LogoutButton from "./logoutButton";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [ mounted, setMounted ] = useState(false);
  const [ username, setUsername ] = useState(session?.user?.username);

  useEffect(() => {
    setMounted(true);
    if (status === "authenticated" && session?.user?.username) {
      setUsername(session.user.username);
    }
  }, [session, status]);

  if(!mounted) return null


  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-black">
      <div>
        <InvoiceGen />
      </div>

      {status === "loading" && <div>Loading...</div>}

      {status === "authenticated" && username && (
        <div>
            <Link href='/setting' className="px-2">
                {username}
            </Link>
            <LogoutButton/>
        </div>
      )}
      {!username && <div>
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
