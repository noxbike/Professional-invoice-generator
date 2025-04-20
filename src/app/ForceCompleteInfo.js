"use client";

import { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
export default function ForceCompleteInfo(WrappedComponent) {
  return function Wrapper(props) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [profileComplete, setProfileComplete] = useState("loading");
    const user_id = 1;

    useEffect(() => {
      if (profileComplete === "loading") {
        const checker = async () => {
          try {
            const response = await fetch("/api/profileCompleted", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ user_id }),
            });
            const data = await response.json();
            setProfileComplete(data.result);
            setLoading(false);
          } catch (error) {
            console.log(error.message);
          }
        };
        checker();
      }
    }, [profileComplete]);

    if (loading) {
      return <div className="text-black">loading...</div>;
    }

    if (!profileComplete && !loading) {
      redirect("/company_info");
    }

    return <WrappedComponent {...props} />;
  };
}
