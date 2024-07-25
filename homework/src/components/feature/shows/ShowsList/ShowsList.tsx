"use client";
import { IShow } from "@/typings/show";
import { SimpleGrid } from "@chakra-ui/react";
import { ShowCard } from "../ShowCard/ShowCard";

export const ShowsList = ({ shows }: { shows: Array<IShow> }) => {
  if (!Array.isArray(shows) || shows.length === 0) {
    return <div data-testid="placeholder">No shows available</div>;
  }
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="6">
      {shows.map((show) => (
        <ShowCard key={show.title} {...show} />
      ))}
    </SimpleGrid>
  );
};
