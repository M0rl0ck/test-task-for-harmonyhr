import { ROUTES_PATH } from "@/constants";
import { useRouter } from "next/navigation";
import { useFetchProfile } from "@/components/API";
import { useEffect } from "react";
import { useStore } from "@/store";
import { Spinner } from "@/components/components";

export function FetchUser() {
  const router = useRouter();

  const { setUser } = useStore();
  const { data, error } = useFetchProfile();

  useEffect(() => {
    if (error) {
      router.replace(ROUTES_PATH.LOGIN);
    }
    if (data && data.myProfile) {
      setUser(data.myProfile);
    }
  }, [data, error, router, setUser]);

  return <Spinner />;
}
