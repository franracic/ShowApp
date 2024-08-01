"use client";
import { LogoImage } from "@/components/core/Logo/Logo";
import { Hide, Show, Stack } from "@chakra-ui/react";
import { DesktopNavigation } from "./components/desktopNavigation";
import { MobileNavigation } from "./components/mobileNavigation";

export const SidebarNavigation = () => {
  return (
    <Stack
      as="aside"
      direction={{
        base: "row",
        md: "column",
      }}
      alignItems="flex-start"
      justifyContent="space-between"
      padding={8}
    >
      <Stack
        spacing={16}
        justifyContent="space-between"
        flexGrow={1}
        direction={{
          base: "row",
          md: "column",
        }}
      >
        <LogoImage width={200} />

        <Hide breakpoint="(max-width: 800px)">
          <DesktopNavigation />
        </Hide>
        <Show breakpoint="(max-width: 800px)">
          <MobileNavigation />
        </Show>
      </Stack>
    </Stack>
  );
};
