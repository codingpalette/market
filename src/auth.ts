import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {getUser} from "@/actions/userAction";

export const {
  handlers: { GET, POST },
  auth,
  signIn, signOut
} = NextAuth({
  pages: {
    signIn: '/login',
    newUser: '/join'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const userInfo = await getUser(credentials)
          if (userInfo?.status !== 200) {
            return null
          }
          return {
            ...userInfo?.data,
            id: userInfo?.data?.user_id,
            name: userInfo?.data?.user_nickname
          }
        } catch (e) {
          return null
        }
      }
    })
  ],
  callbacks: {
    // jwt({ token}) {
    //   console.log('auth.ts jwt', token);
    //   return token;
    // },
    // session({ session, newSession, user}) {
    //   return session;
    // },
    // async redirect({url, baseUrl}) {
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   return baseUrl
    // }
  }
});
