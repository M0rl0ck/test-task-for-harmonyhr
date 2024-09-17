"use client";

import { LoginForm } from "@/components/components/LoginForm/LoginForm";
import { useLogin } from "./service";

export function Login() {
  const { login } = useLogin();

  const onSubmit = (email: string, password: string) => {
    login({ variables: { email, password } });
  };

  return <LoginForm onSubmit={onSubmit} />;
}
