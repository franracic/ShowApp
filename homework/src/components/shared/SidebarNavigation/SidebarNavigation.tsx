"use client";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
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
      <Box mt="auto">
        {!isLoading && data ? (
          <Button mt={8} colorScheme="red" variant="outline" onClick={logout}>
            Log Out
          </Button>
        ) : (
          <>
            <Button
              mt={8}
              colorScheme="blue"
              variant="outline"
              as={NextLink}
              href="/login"
              w={"100%"}
            >
              Log In
            </Button>
            <Button
              mt={4}
              colorScheme="blue"
              variant="outline"
              as={NextLink}
              href="/register"
              w={"100%"}
            >
              Register
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
};
