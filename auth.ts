import NextAuth, { type DefaultSession } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import GoogleProvider from "next-auth/providers/google";

declare module 'next-auth' {
  interface Session {
    user: {
      /** The user's id. */
      id: string
      name: string
      email: string
    } 
  }
}

export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental // will be removed in future
} = NextAuth({
  providers: [GitHub, GoogleProvider({
    clientId: process.env.GOOGLE_ID!,
    clientSecret: process.env.GOOGLE_SECRET!,
  })],
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.email = profile.email
        token.name = profile.name
        token.id = profile.email
      }
      return token
    },
    authorized({ auth }) {
      return !!auth?.user // this ensures there is a logged in user for -every- request
    }
  },
  pages: {
    signIn: '/sign-in' // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
  }
})
