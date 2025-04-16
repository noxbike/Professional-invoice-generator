'use client';

import { useEffect } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";


export default function CompanyInfoWrapper({children}, redirectTo = '/company_info') {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated" && !session.user.isProfileCompleted) {
            router.push(`${redirectTo}?callbackUrl=${window.location.pathname}`);
        }
    },[status, session, router, redirectTo]);
    

    return (<>{children}</>)   
}