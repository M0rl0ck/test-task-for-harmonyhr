"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/apollo/apolloClient";

// import { useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
