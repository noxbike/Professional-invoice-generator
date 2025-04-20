"use client";

import { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import { useSession } from "next-auth/react";
export default function ForceCompleteInfo(WrappedComponent) {
  return function Wrapper(props) {
    const router = useRouter();
    const {data: session, status} = useSession();
    const [profileComplete, setProfileComplete] = useState("loading");
    

    useEffect(() => {
      if (!session?.user?.id) return

      if (!profileComplete) {
        const checker = async () => {
          try {
            const response = await fetch("/api/profileCompleted", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ user_id: session.user.id }),
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
    }, [status, profileComplete, session]);

    if (status === "loading") {
      return <div className="text-black">loading...</div>;
    }

    if (!profileComplete && status !== 'loading') {
      redirect("/company_info");
    }

    return <WrappedComponent {...props} />;
  };
}
