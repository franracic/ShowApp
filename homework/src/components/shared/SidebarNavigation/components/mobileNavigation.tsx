"use client";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import useSWR, { mutate } from "swr";
import { NavigationMenu } from "./NavigationMenu";

export const MobileNavigation = () => {
  const router = useRouter();

  const { data, isLoading } = useSWR(swrKeys.currentUser, fetcher);

  const { isOpen, onToggle, onClose } = useDisclosure();

  if (isLoading || !data) {
    return null;
  }

  return (
    <>
      <IconButton
        aria-label="open sidebar"
        color={"white"}
        variant={"transparent"}
        fontSize="24px"
        onClick={onToggle}
      >
        <HamburgerIcon />
      </IconButton>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        variant={"purple"}
      >
        <DrawerOverlay />
        <DrawerContent bg={"purpleDark"}>
          <DrawerCloseButton />

          <DrawerBody marginTop="80px">
            <NavigationMenu onSelect={onClose} />
          </DrawerBody>

          <DrawerFooter justifyContent="flex-start" marginBottom="50px">
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
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};