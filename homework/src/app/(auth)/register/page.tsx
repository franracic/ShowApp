import { RegisterForm } from "@/components/feature/auth/RegisterForm/RegisterForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function Login() {
  return (
    <>
      <AuthRedirect to="/all-shows" condition="loggedIn" />
      <RegisterForm />;
    </>
  );
}
