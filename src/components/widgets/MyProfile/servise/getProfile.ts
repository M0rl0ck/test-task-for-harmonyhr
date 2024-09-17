import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/apollo";
import { LocalStorageKeys } from "@/constants";
import { useRefreshToken } from "./refreshToken";
import { useEffect, useState } from "react";

const useFetchProfile = () => {
  const [token, setToken] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN) || ""
      : ""
  );
  const [authError, setAuthError] = useState(false);
  const { refreshToken } = useRefreshToken();

  const { data, loading, error } = useQuery(GET_PROFILE, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (error) {
      refreshToken({
        variables: {
          refreshToken:
            localStorage.getItem(LocalStorageKeys.REFRESH_TOKEN) || "",
        },
        onError: () => {
          setAuthError(true);
        },
        onCompleted: (data) => {
          setToken(data.refreshToken.access_token);
        },
      });
    }
  }, [error, refreshToken]);

  return { data, loading, error: authError };
};

export { useFetchProfile };
