"use client";

import { LoginForm } from "@/components/components/LoginForm/LoginForm";
import { useLogin } from "./service";
import { Toaster } from "@/components/ui/toaster";

import { useToast } from "@/hooks/use-toast";

export function Login() {
  const { login } = useLogin();
  const { toast: showToast } = useToast();

  const onSubmit = (email: string, password: string) => {
    login({
      variables: { email, password },
      onError: () => {
        showToast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Password or email is incorrect",
          duration: 1000,
        });
      },
    });
  };

  return (
    <>
      <LoginForm onSubmit={onSubmit} />
      <Toaster />
    </>
  );
}
