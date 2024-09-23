"use client";

import { useStore } from "@/store";
import {
  MyInfoContent,
  MyInfoDetails,
  MyInfoHeder,
} from "@/components/widgets";

export function MyProfile() {
  const { user } = useStore();

  return (
    <main className="w-full bg-bgGray">
      {user && (
        <>
          <MyInfoHeder user={user} />
          <div className="flex pb-72 max-md:pb-0">
            <MyInfoDetails user={user} />
            <MyInfoContent />
          </div>
        </>
      )}
    </main>
  );
}
