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
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import useSWR, { mutate } from "swr";

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

export const MobileNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("auth-header");
    mutate(swrKeys.currentUser, null, false);
    router.push("/login");
  };

  const { data, isLoading } = useSWR(swrKeys.currentUser, fetcher);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  if (isLoading || !data) {
    return null;
  }

  return (
    <Flex p={4} w={"100%"} justifyContent={"space-between"}>
      <Heading color={"white"} pr={3}>
        Tv shows APP
      </Heading>
      <IconButton
        aria-label="Open navigation"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer
        isOpen={isOpen}
        placement={"left"}
        onClose={onClose}
        finalFocusRef={btnRef}
        isFullHeight={true}
      >
        <DrawerOverlay />
        <DrawerContent bg={"purpleDark"}>
          <DrawerCloseButton bg={"white"} />
          <DrawerBody>
            <Stack direction={"column"} mt={10}>
              {navigationButtons.map((item) => (
                <Button
                  key={item.href}
                  as={NextLink}
                  href={item.href}
                  variant={pathname.startsWith(item.href) ? "solid" : "ghost"}
                  colorScheme="whiteAlpha"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                colorScheme="red"
                variant="outline"
                onClick={() => {
                  logout();
                  onClose();
                }}
              >
                Log Out
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
