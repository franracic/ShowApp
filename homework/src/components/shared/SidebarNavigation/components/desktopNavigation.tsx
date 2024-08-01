"use client";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, VStack } from "@chakra-ui/react";
import { mutate } from "swr";
import { NavigationMenu } from "./NavigationMenu";

export const DesktopNavigation = () => {
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
          localStorage.removeItem("auth-header");
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