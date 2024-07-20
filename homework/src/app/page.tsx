"use client";
import { useRedirect } from "@/hooks/useRedirect";
import { Spinner } from "@chakra-ui/react";

export default function Page() {
  const isRunning = useRedirect("/all-shows", true);

  if (isRunning) {
    return <Spinner />;
  }

  return null;
}
