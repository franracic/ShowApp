"use client";
import { ShowsList } from "@/components/feature/shows/ShowsList/ShowsList";
import { getTopRatedShows } from "@/fetchers/show";
import { swrKeys } from "@/fetchers/swrKeys";
import { Heading, Spinner } from "@chakra-ui/react";
import useSWR from "swr";

export default function Page() {
  const { data, error, isLoading } = useSWR(
    swrKeys.topRatedShows,
    getTopRatedShows
  );

  if (error) {
    return <Heading color={"white"}>Ups something went wrong...</Heading>;
  }

  if (isLoading || !data || !data.shows) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  const shows = data.shows;
  return <ShowsList shows={shows} />;
}
