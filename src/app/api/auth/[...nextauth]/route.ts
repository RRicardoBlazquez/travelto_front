import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";




//import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
//const authOptions: NextAuthOptions = {

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [

        CredentialsProvider({

            name: "Credentials",

            credentials: {
                email: { label: "email", type: "email", placeholder: "abc123@example.com" },
                name: { label: "name", type: "text", placeholder: "pepe" },
                password: { label: "Password", type: "password" }
            },
            authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied

                let user = { id: "1", name: credentials?.name, email: credentials?.email };

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,

        })

        // ...add more providers here
    ],

    /* callbacks: {
        // Using the `...rest` parameter to be able to narrow down the type based on `trigger`
        jwt({ token, trigger, session }) {
            if (trigger === "update" && session?.name) {
                // Note, that `session` can be any arbitrary object, remember to validate it!
                token.name = session.name
            }
            return token
        },
        async session({ session, token }) {
            session.user = token as any;
            return session;
        }
    } */
});
//const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };