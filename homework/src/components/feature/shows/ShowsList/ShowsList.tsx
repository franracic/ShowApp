import { IShow } from "@/typings/show";
import { SimpleGrid } from "@chakra-ui/react";
import { ShowCard } from "../ShowCard/ShowCard";

const mockShows: Omit<IShow, "description">[] = [
  {
    title: "Example Show Title",
    averageRating: 1.3,
  },
  {
    title: "Another Show Title",
    averageRating: 4.2,
  },
];

export const ShowsList = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="6">
      {mockShows.map((show) => (
        <ShowCard key={show.title} {...show} />
      ))}
    </SimpleGrid>
  );
};
