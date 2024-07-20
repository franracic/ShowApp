"use client";
import ShowSection from "@/components/feature/shows/ShowSection/ShowSection";
import { getShow } from "@/fetchers/show";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function Page() {
  const params = useParams();
  const { id } = params;

  const { data, error, isLoading } = useSWR(`api/show/${id}`, () =>
    getShow(id as string)
  );

  if (error) {
    return <Heading color={"white"}>Ups something went wrong...</Heading>;
  }

  if (isLoading || !data) {
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

  return <ShowSection show={data} />;
}
