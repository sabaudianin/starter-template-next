// TypeScript should knows role exists on the session
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      username: string | null;
      onboarded: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    role: string;
    username: string | null;
    onboarded: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    username: string | null;
    onboarded: boolean;
  }
}
