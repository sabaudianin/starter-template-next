// src/auth.ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" }, // Middleware wymaga strategii JWT, by działać bez bazy
  ...authConfig,
  callbacks: {
    async session({ session, token }) {
      // Przy strategii JWT dane bierzemy z 'token', a nie z 'user'
      if (token && session.user) {
        session.user.id = token.sub as string;
        session.user.role = token.role as string;
        session.user.username = token.username as string;
        session.user.onboarded = token.onboarded as boolean;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Przy logowaniu przepisujemy dane z bazy do tokena
      if (user) {
        token.role = token.role;
        token.username = token.username;
        token.onboarded = token.onboarded;
      }
      return token;
    },
  },
});
