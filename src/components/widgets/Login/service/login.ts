import { LOGIN } from "@/apollo";
import { LocalStorageKeys, ROUTES_PATH } from "@/constants";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useLogin = () => {
  const router = useRouter();
  const [login, { error, data }] = useMutation(LOGIN);
  useEffect(() => {
    if (
      data &&
      data.login &&
      data.login.access_token &&
      data.login.refresh_token
    ) {
      // Set access token and refresh token in local storage
      localStorage.setItem(
        LocalStorageKeys.ACCESS_TOKEN,
        data.login.access_token
      );
      localStorage.setItem(
        LocalStorageKeys.REFRESH_TOKEN,
        data.login.refresh_token
      );
      router.push(ROUTES_PATH.MY_INFO);
    }
  }, [data, router]);

  return { login, error };
};
export { useLogin };
