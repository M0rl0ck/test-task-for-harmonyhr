import { LocalStorageKeys, ROUTES_PATH } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FetchLayout } from "./FetchLayout";

export function RootContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isToken, setToken] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
    if (!token) {
      router.replace(ROUTES_PATH.LOGIN);
    }
    setToken(!!token);
  }, [router]);
  return isToken ? (
    <div className="max-w-[1440px] w-full h-full m-auto">
      <FetchLayout>{children}</FetchLayout>
    </div>
  ) : null;
}
