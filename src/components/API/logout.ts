import { LocalStorageKeys, ROUTES_PATH } from "@/constants";
import { useRouter } from "next/navigation";
import { useStore } from "@/store";

const useLogout = () => {
  const router = useRouter();

  const { deleteUser } = useStore();
  const logOut = () => {
    localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
    localStorage.removeItem(LocalStorageKeys.REFRESH_TOKEN);
    deleteUser();
    router.replace(ROUTES_PATH.LOGIN);
  };
  return {
    logOut,
  };
};

export { useLogout };
