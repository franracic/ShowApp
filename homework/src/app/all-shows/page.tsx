"use client";
import { ShowsList } from "@/components/feature/shows/ShowsList/ShowsList";
import { getShows } from "@/fetchers/show";
import { swrKeys } from "@/fetchers/swrKeys";
import { Heading, Spinner, VStack } from "@chakra-ui/react";
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
      <VStack py={16}>
        <Spinner size="xl" />
      </VStack>
    );
  }

  const shows = data.shows;
  return (
    <>
      <ShowsList shows={shows} />
    </>
  );
}
