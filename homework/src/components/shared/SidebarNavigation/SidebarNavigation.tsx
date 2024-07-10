"use client";
import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export const SidebarNavigation = () => {
  const pathname = usePathname();

  return (
    <Flex
      height={"100vh"}
      direction={"column"}
      justifyContent={"space-between"}
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
      <Button colorScheme="red" variant="outline">
        Log out
      </Button>
    </Flex>
  );
};
