"use client";
import { ShowPicker } from "@/components/feature/show-picker/ShowPicker/ShowPicker";
import { Hide, Show } from "@chakra-ui/react";
import { DesktopNavigation } from "./components/desktopNavigation";
import { MobileNavigation } from "./components/mobileNavigation";

export const SidebarNavigation = () => {
  return (
    <>
      <Hide breakpoint="(max-width: 800px)">
        <DesktopNavigation />
      </Hide>
      <Show breakpoint="(max-width: 800px)">
        <MobileNavigation />
      </Show>
    </>
  );
};
