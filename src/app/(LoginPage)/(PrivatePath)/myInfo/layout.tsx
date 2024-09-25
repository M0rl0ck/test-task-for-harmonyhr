"use client";

import { useStore } from "@/store";
import { MyInfoDetails, MyInfoHeder } from "@/components/widgets";
import { MyInfoNavigation } from "@/components/components";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { MY_INFO_ROUTES, ROUTES_PATH } from "@/constants";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const route = useRouter();
  const { user } = useStore();
  useEffect(() => {
    if (pathname === ROUTES_PATH["My Info"]) {
      route.replace(MY_INFO_ROUTES["Time of"]);
    }
  });
  return (
    <main className="w-full bg-bgGray">
      {user && (
        <>
          <MyInfoHeder user={user} />
          <div className="flex pb-72 max-md:pb-0">
            <MyInfoDetails user={user} />
            <div className="flex flex-col flex-1 max-[1400px]:max-w-[calc(100%-var(--aside-width))] max-md:max-w-full mt-[calc(var(--my-info-content-header-h)*-1)]">
              <MyInfoNavigation />
              {children}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
