import { IShow } from "@/typings/show";
import { Card, Flex, Heading, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReviewStarsValue } from "../../review/ReviewStars/ReviewStarsValue";

const placeholderImage = "https://fakeimg.pl/600x400?text=No+show+image";

export const ShowCard = ({
  title,
  average_rating,
  image_url,
  id,
}: Omit<IShow, "description">) => {
  return (
    <Card
      as={NextLink}
      href={`/all-shows/${id}`}
      variant={"secondary"}
      data-testid="show-card"
    >
      <Image
        borderTopRadius={"containerRadius"}
        src={image_url || placeholderImage}
        alt={title}
        data-testid="placeholder"
        h={400}
      />
      <Flex direction={"column"} p={3}>
        <Heading>{title}</Heading>
        <ReviewStarsValue value={average_rating} />
      </Flex>
    </Card>
  );
};
