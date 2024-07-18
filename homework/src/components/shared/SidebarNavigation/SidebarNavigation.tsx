"use client";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useSWR, { mutate } from "swr";

export const SidebarNavigation = () => {
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
      p={2}
      position="fixed"
      top="0"
      left="0"
      w={"10vw"}
      minW={"100px"}
    >
      {!isLoading && data ? (
        <>
          <Stack direction={"column"}>
            <Heading size={"l"} color={"white"} mb={8}>
              Tv shows APP
            </Heading>
            <Button
              as={NextLink}
              href="/all-shows"
              variant={pathname.startsWith("/all-shows") ? "outline" : "ghost"}
              colorScheme="whiteAlpha"
            >
              All shows
            </Button>
            <Button
              as={NextLink}
              href="/top-rated"
              variant={pathname.startsWith("/top-rated") ? "outline" : "ghost"}
              colorScheme="whiteAlpha"
            >
              Top rated
            </Button>
            <Button
              variant={pathname.startsWith("/profile") ? "outline" : "ghost"}
              colorScheme="whiteAlpha"
            >
              My profile
            </Button>
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
