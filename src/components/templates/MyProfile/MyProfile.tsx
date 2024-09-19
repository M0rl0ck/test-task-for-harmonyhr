"use client";

import { LocalStorageKeys, ROUTES_PATH } from "@/constants";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useFetchProfile } from "./service";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useStore } from "@/store";

export function MyProfile() {
  const router = useRouter();

  const { user, setUser, deleteUser } = useStore();

  const logOut = () => {
    localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
    localStorage.removeItem(LocalStorageKeys.REFRESH_TOKEN);
    deleteUser();
    router.replace(ROUTES_PATH.LOGIN);
  };

  const { data, loading, error } = useFetchProfile();

  useEffect(() => {
    if (error) {
      router.replace(ROUTES_PATH.LOGIN);
    }
    if (data && data.myProfile) {
      setUser(data.myProfile);
    }
  }, [data, error, router, setUser]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {user && (
        <div>
          <p className="capitalize text-xl font-bold">{user.name}</p>
          <Avatar className="w-[150px] h-[150px]">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button onClick={logOut}>LogOut</Button>
        </div>
      )}
    </>
  );
}
