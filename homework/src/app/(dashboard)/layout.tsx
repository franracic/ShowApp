import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthRedirect to="/login" condition="loggedOut" />
      <main>{children}</main>
    </>
  );
}
