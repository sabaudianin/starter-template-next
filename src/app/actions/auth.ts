"use server";

import { signIn, signOut } from "@/auth";

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/dashboard" });
}

export async function signInWithEmail(formData: FormData) {
  const email = formData.get("email") as string;
  if (!email) {
    throw new Error("Email required");
  }
  try {
    await signIn("resend", { email, redirectTo: "/dashboard" });
  } catch (error) {
    throw error;
  }
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}
