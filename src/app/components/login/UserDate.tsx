"use client"
import { signOut, useSession } from "next-auth/react"
import Image from 'next/image'

export const UserDate = () => {
    const { data: session } = useSession();
    console.log(session);

    if (!session) {
        return (
            <article>
                <h2>Loading...</h2>
            </article>
        )
    }

    return (
        <article className="h-500 flex flex-col items-center justify-around">
            <div className="flex items-center">
                <img src={session.user.image ? session.user?.image as string : "/image/viajero.jpg"} className="w-200 h-200" alt=""></img>
            </div>

            <div className="flex items-center">
                <h2>{session.user?.email}</h2>
            </div>
            <div className="flex" data-te-input-wrapper-init>
                <h2>{session.user?.name}</h2>
            </div>
            <button onClick={async () => { await signOut({ callbackUrl: "/" }) }} className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white">Close</button>
        </article>

    )
}