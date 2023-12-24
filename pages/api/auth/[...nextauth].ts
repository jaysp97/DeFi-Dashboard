import NextAuth from 'next-auth';
import { MoralisNextAuthProvider } from '@moralisweb3/next';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [MoralisNextAuthProvider(), GoogleProvider({
    clientId: process.env.884596322496-8eia5l34eblffdn48p7m6rchcfhml07k.apps.googleusercontent.com,
    clientSecret: process.env.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,
  })],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      (session as { user: unknown }).user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
});
