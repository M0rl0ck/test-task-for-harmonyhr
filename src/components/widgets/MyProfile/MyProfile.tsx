"use client";

import { LocalStorageKeys } from "@/constants";
import { useRouter } from "next/navigation";

export function MyProfile() {
  const token = localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
  const router = useRouter();
  if (!token) {
    router.replace("/");
  }

  return (
    <div>
      <p>This is a My Info PAGE</p>
      <p>Token: {token}</p>
    </div>
  );
}
