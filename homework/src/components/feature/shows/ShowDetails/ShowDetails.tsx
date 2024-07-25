import { IShow } from "@/typings/show";
import { Card, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ReviewStarsValue } from "../../review/ReviewStars/ReviewStarsValue";

export const ShowDetails = ({
  title,
  description,
  image_url,
  average_rating,
}: IShow) => {
  const placeholderImage = "https://fakeimg.pl/600x400?text=No+show+image";

  return (
    <Card variant={"secondary"} maxW={"100%"} w={"700px"}>
      <Image
        width={"100%"}
        maxH={"400px"}
        borderTopRadius={"containerRadius"}
        src={image_url || placeholderImage}
        alt={title}
      />
      <Flex justifyContent={"space-between"} p={4}>
        <Flex direction={"column"}>
          <Heading>{title}</Heading>
          <ReviewStarsValue value={average_rating} />
        </Flex>
        <Text width={"50%"}>{description}</Text>
      </Flex>
    </Card>
  );
};
