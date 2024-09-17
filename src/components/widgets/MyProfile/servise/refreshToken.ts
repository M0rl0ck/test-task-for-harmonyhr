import { useMutation } from "@apollo/client";
import { REFRESH_TOKEN } from "@/apollo";
import { LocalStorageKeys } from "@/constants";
import { useEffect } from "react";

const useRefreshToken = () => {
  const [refreshToken, { error, data }] = useMutation(REFRESH_TOKEN);

  useEffect(() => {
    if (error) {
      localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
      localStorage.removeItem(LocalStorageKeys.REFRESH_TOKEN);
    }
    if (
      data &&
      data.refreshToken &&
      data.refreshToken.access_token &&
      data.refreshToken.refresh_token
    ) {
      // Set access token and refresh token in local storage
      localStorage.setItem(
        LocalStorageKeys.ACCESS_TOKEN,
        data.refreshToken.access_token
      );
      localStorage.setItem(
        LocalStorageKeys.REFRESH_TOKEN,
        data.refreshToken.refresh_token
      );
    }
  }, [error, data]);
  return { refreshToken, refreshData: data, refreshError: error };
};

export { useRefreshToken };
