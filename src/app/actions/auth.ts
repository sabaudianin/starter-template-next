// src/app/actions/auth.ts
"use server";

import { signIn, signOut } from "@/auth";

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/dashboard" });
}

export async function signInWithEmail(formData: FormData) {
  const email = formData.get("email") as string;
  await signIn("resend", { email, redirectTo: "/dashboard" });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}
