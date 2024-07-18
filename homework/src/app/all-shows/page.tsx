"use client";
import { ShowsList } from "@/components/feature/shows/ShowsList/ShowsList";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { getShows } from "@/fetchers/show";
import { Spinner } from "@chakra-ui/react";
import useSWR from "swr";

export default function Page() {
  const { data, isLoading } = useSWR("/api/shows", getShows);

  if (isLoading || !data || !data.shows) {
    return (
      <>
        <AuthRedirect to="/login" condition="loggedOut" />
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </>
    );
  }

  const shows = data.shows;
  return (
    <>
      <AuthRedirect to="/login" condition="loggedOut" />
      <ShowsList shows={shows} />
    </>
  );
}
