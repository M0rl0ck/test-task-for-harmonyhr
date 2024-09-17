import { LocalStorageKeys, ROUTES_PATH } from "@/constants";
import { useRouter } from "next/navigation";

const useLogout = () => {
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
    localStorage.removeItem(LocalStorageKeys.REFRESH_TOKEN);
    router.replace(ROUTES_PATH.LOGIN);
  };
  return {
    logOut,
  };
};

export { useLogout };
