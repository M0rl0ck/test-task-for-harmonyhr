"use client";

import { Button } from "@/components/ui/button";
import { useLogout } from "@/components/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useStore } from "@/store";

export function MyProfile() {
  const { user } = useStore();

  const { logOut } = useLogout();

  return (
    <>
      {user && (
        <>
          <p className="capitalize text-xl font-bold">{user.name}</p>
          <Avatar className="w-[150px] h-[150px]">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button onClick={logOut}>LogOut</Button>
        </>
      )}
    </>
  );
}
