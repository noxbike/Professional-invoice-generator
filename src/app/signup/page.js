import Render from "./render";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Signup() {
    const session = await getServerSession(authOptions);
    if (session) {
      // If user is already logged in, redirect them away from login page
      return (
        redirect('/invoices')
      );
    }
  
    return (
      <Render />
    );
  }