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
      p={2}
      border={"1px solid black"}
      borderRadius={"2xl"}
      boxShadow={"md"}
      bg={"whiteAlpha.100"}
      maxW={"100%"}
      w={"700px"}
    >
      <Image
        alignSelf={"center"}
        width={"100%"}
        maxH={"400px"}
        borderRadius={"lg"}
        src={image_url || placeholderImage}
        alt={title}
      />
      <Flex direction={"column"} alignItems={"center"}>
        <Heading as="h2" size="lg" padding={4} color={"white"}>
          {title}
        </Heading>
        <ReviewStarsValue value={average_rating} />
      </Flex>
    </Card>
  );
};
