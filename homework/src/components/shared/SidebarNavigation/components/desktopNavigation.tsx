"use client";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
    <Flex
      height={"100vh"}
      direction={"column"}
      position="sticky"
      p={1}
      top="0"
      left="0"
      maxW={"300px"}
      minW={"100px"}
    >
      {!isLoading && data ? (
        <>
          <Stack direction={"column"}>
            <Heading size={"l"} color={"white"} mb={8}>
              Tv shows APP
            </Heading>
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
          </Stack>
          <Button
            mt={"auto"}
            colorScheme="red"
            variant="outline"
            onClick={logout}
          >
            Log Out
          </Button>
        </>
      ) : null}
    </Flex>
  );
};
