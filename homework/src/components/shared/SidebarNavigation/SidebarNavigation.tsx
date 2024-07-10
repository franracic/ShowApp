import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

export const SidebarNavigation = () => {
  return (
    <Flex
      height={"100vh"}
      direction={"column"}
      justifyContent={"space-between"}
      p={5}
      position="fixed"
      top="0"
      left="0"
      w={"150px"}
    >
      <Stack direction={"column"}>
        <Heading size={"l"} color={"white"}>
          Tv show APP
        </Heading>
        <Button as={NextLink} href="/all-shows">
          All shows
        </Button>
        <Button as={NextLink} href="/top-rated">
          Top rated
        </Button>
        <Button>My profile</Button>
      </Stack>
      <Button>Log out</Button>
    </Flex>
  );
};
