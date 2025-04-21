"use client";

import { useState, useEffect } from "react";
import InvoiceGen from "./invoicegen";
import Link from "next/link";
import LogoutButton from "./logoutButton";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);
  const [username, setUsername] = useState(session?.user?.username);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setMounted(true);
    if (status === "authenticated" && session?.user?.username) {
      setUsername(session.user.username);
    }
  }, [session, status]);

  if (!mounted) return null;

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-black">
      <div>
        <InvoiceGen />
      </div>

      {status === "loading" && <div>Loading...</div>}

      {/* Profil dropdown à droite */}
      {status === "authenticated" && username && (
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">{username}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
              <Link
                href="/dashboard"
                onClick={toggleDropdown}
                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Dashboard
              </Link>
              <Link
                href="/setting"
                onClick={toggleDropdown}
                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Setting
              </Link>
              <div className="border-t border-gray-200 dark:border-gray-700">
                <LogoutButton
                  onClick={toggleDropdown}
                  className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>
      )}
      {!username && (
        <div>
          <Link className="text-blue-500 px-2" href={"/login"}>
            Login
          </Link>
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            href="/new_invoice"
          >
            Créer votre facture
          </Link>
        </div>
      )}
    </nav>
  );
}
