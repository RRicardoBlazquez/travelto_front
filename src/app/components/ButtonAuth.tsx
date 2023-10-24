"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function ButtonAuth() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white">Loading...</button>
    }

    if (session) {
        return (
            <>
                Welcome {session.user?.email}
                <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white">Close</button>
            </>
        )
    }
    return (
        <>
            Not user
            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white">Login</button>
        </>
    )
}