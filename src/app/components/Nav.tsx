'use client'
import Link from "next/link";
import ButtonAuth from "./ButtonAuth";
import { useSession } from "next-auth/react"

const links = [{
    label: 'Home',
    route: '/'
},
{
    label: 'Shopping',
    route: '/shopping'
},

]
export function Navigation() {
    const { data: session, status } = useSession();

    return (
        <header>
            <nav >
                <ul className="flex justify-around">
                    {links.map(({ label, route }) => (
                        <li className="flex-none w-40 h-30 p-10" key={route}>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                    {session?.user?.name && (<li key={"/admin"}>
                        <Link className="flex-none w-40 h-30 p-10" href={"/admin"}> Admin </Link>
                    </li>)}
                    <li className="flex-none w-40 h-30 p-10" key={"/login"} >
                        <Link href={"/login"}>
                            <ButtonAuth />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}