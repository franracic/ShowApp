"use client";
import { ReviewContextProvider } from "@/components/feature/review/ReviewContext/ReviewContext";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Box, Container, Stack } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box as="html" lang="en" height="100%">
      <Box as="body" height="100%">
        <Providers>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing={4}
            alignItems="stretch"
            height="100%"
          >
            <ReviewContextProvider>
              <SidebarNavigation />
              <Box flexGrow={1} overflowY="auto">
                <Container maxW="container.2xl" padding={8}>
                  {children}
                </Container>
              </Box>
            </ReviewContextProvider>
          </Stack>
        </Providers>
      </Box>
    </Box>
  );
}
