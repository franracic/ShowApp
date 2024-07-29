"use client";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, VStack } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import useSWR, { mutate } from "swr";
import { NavigationMenu } from "./NavigationMenu";

const navigationButtons = [
  {
    label: "All shows",
    href: "/all-shows",
  },
  {
    label: "Top rated",
    href: "/top-rated",
  },
  {
    label: "My profile",
    href: "/profile",
  },
];

export const DesktopNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("auth-header");
    mutate(swrKeys.currentUser, null, false);
    router.push("/login");
  };

  const { data, isLoading } = useSWR(swrKeys.currentUser, fetcher);

  return (
    <VStack
      hideBelow="md"
      flexGrow={1}
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <NavigationMenu />

      <Button
        variant="dark"
        onClick={() => {
          localStorage.removeItem("authData");
          mutate(swrKeys.currentUser, null, {
            revalidate: false,
          });
        }}
      >
        Log out
      </Button>
    </VStack>
  );
};
