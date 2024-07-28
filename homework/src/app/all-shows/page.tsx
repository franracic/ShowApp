"use client";
import { ShowsList } from "@/components/feature/shows/ShowsList/ShowsList";
import { getShows } from "@/fetchers/show";
import { swrKeys } from "@/fetchers/swrKeys";
import { Heading, Spinner } from "@chakra-ui/react";
import useSWR from "swr";

export default function Page() {
  const { data, isLoading } = useSWR(swrKeys.listShows, getShows);

  if (!isLoading && (!data || !data.shows)) {
    return (
      <Heading color="white">
        No shows found. Please check the URL and try again.
      </Heading>
    );
  }

  if (isLoading || !data || !data.shows) {
    return (
      <>
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
      <ShowsList shows={shows} />
    </>
  );
}
