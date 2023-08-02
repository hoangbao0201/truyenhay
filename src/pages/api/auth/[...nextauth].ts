import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({

            name: "Credentials",
            
            credentials: {
                accout: {
                    label: "Accout",
                    type: "text",
                },
                password: {
                    label: "Password", 
                    type: "password"
                },
            },
            async authorize(credentials, req) {

                const res = await axios.post("https://hobanovel-be.azurewebsites.net/api/auth/login", {
                    accout: credentials?.accout,
                    password: credentials?.password,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const user = await res.data;
                // const user = {
                //     username: credentials?.accout,
                //     password: credentials?.password,
                // };

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        },
    },
});
