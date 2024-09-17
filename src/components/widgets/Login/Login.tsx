"use client";

import { LOGIN } from "@/apollo/mutations";
import { LoginForm } from "@/components/components/LoginForm/LoginForm";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { LocalStorageKeys } from "@/constants";

export function Login() {
  const router = useRouter();
  const [login] = useMutation(LOGIN, {
    onCompleted: (data) => {
      // Handle successful login
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
        router.push("/myInfo");
      }
    },
    onError: (error) => {
      // Handle login error
      console.log(error);
    },
  });

  const onSubmit = (email: string, password: string) => {
    login({ variables: { email, password } });
  };

  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
