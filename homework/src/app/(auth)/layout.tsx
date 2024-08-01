import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Stack } from "@chakra-ui/react";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <AuthRedirect to="/all-shows" condition="loggedIn" />
      <Stack height="100%" alignItems="center" justifyContent="center">
        {children}
      </Stack>
    </>
  );
};

export default AuthLayout;
