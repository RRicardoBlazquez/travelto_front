"use client"

import { useGetUsersQuery } from "@/redux/services/userApi";
import { use } from "react";

export default function ListUsers() {
    const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

    if (isLoading || isFetching) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Some error</p>
    }

    return (
        <>
            <ul>
                {data?.map((user, index) => (
                    <li key={index}>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.username}</p>
                    </li>
                ))}
            </ul>
        </>
    )

}