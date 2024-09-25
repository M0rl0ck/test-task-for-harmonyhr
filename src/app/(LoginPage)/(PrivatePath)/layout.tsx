"use client";

import { RootContainer } from "@/components/components";
import { Header } from "@/components/templates";

// import { useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootContainer>
      {<Header />}
      {children}
    </RootContainer>
  );
}
