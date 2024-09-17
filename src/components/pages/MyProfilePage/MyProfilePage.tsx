"use client";

import { MyProfile } from "@/components/widgets";
import { LocalStorageKeys, ROUTES_PATH } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function MyProfilePage() {
  const [isToken, setToken] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
    if (!token) {
      router.replace(ROUTES_PATH.LOGIN);
    }
    setToken(!!token);
  }, [router]);

  return isToken ? <MyProfile /> : null;
}
