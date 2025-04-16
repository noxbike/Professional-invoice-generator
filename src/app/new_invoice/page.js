"use client";


import useAuth from "@/components/useAuth";
import Render from "./render";

export default function NewInvoice() {
  
  const { isAuthenticated, isLoading, session } = useAuth();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return null;
  }

  return <Render/>
}
