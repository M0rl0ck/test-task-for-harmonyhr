"use client";

import { LocalStorageKeys, ROUTES_PATH } from "@/constants";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useFetchProfile } from "./service";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MyProfile() {
  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
    localStorage.removeItem(LocalStorageKeys.REFRESH_TOKEN);
    router.replace(ROUTES_PATH.LOGIN);
  };

  const { data, loading, error } = useFetchProfile();

  useEffect(() => {
    if (error) {
      router.replace(ROUTES_PATH.LOGIN);
    }
  }, [error, router]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {data && (
        <div>
          <p>{data.myProfile.name}</p>
          <Avatar className="w-[150px] h-[150px]">
            <AvatarImage src={data.myProfile.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button onClick={logOut}>LogOut</Button>
        </div>
      )}
    </>
  );
}
