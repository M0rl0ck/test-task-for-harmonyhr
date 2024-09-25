"use client";

import { Login } from "@/components/widgets";
import { LocalStorageKeys, MY_INFO_ROUTES } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function LoginPage() {
  const [isToken, setToken] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
    if (!!token) {
      router.replace(MY_INFO_ROUTES["Time of"]);
    }
    setToken(!!token);
  }, [router]);

  return isToken ? null : <Login />;
}
