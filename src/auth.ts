import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import EmailProvider from "next-auth/providers/email";
import {sql} from '@vercel/postgres';

export const {
  headers: {GET, POST},
  auth,
  signIn
} = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // 유저 하나 조회
        const user = await sql`SELECT * FROM users WHERE user_nickname = ${credentials.name}`;

      }
    }),
  ]
})
