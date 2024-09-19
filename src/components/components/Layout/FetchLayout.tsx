import { useStore } from "@/store";
import { FetchUser } from "./FetchUser";

export function FetchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useStore();
  return user ? <>{children}</> : <FetchUser />;
}
