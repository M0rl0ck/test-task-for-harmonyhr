"use client";

import { MyProfile } from "@/components/templates";
import { RootContainer } from "@/components/components";
import { Header } from "@/components/templates";

export function MyProfilePage() {
  return (
    <RootContainer>
      <Header />
      <MyProfile />
    </RootContainer>
  );
}
