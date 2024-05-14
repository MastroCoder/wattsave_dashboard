import type {NextAuthOptions} from "next-auth"
import Credentials from 'next-auth/providers/credentials';
export const authConfig: NextAuthOptions = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthOptions;
