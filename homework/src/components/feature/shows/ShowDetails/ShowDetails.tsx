import { IShow } from "@/typings/show";
import { Box, Card, Heading, Image, Text } from "@chakra-ui/react";
import { ReviewStarsValue } from "../../review/ReviewStars/ReviewStarsValue";

export const ShowDetails = ({
  title,
  description,
  imageUrl,
  averageRating,
}: IShow) => {
  const placeholderImage = "https://fakeimg.pl/600x400?text=No+show+image";

  return (
    <Card
      p={4}
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
        src={imageUrl || placeholderImage}
        alt={title}
      />
      <Box display={"flex"} alignItems={"center"}>
        <Heading as="h2" size="lg" padding={4} color={"white"}>
          {title}
        </Heading>
        <ReviewStarsValue value={averageRating} />
      </Box>
      <Text color={"gray.400"} paddingX={4}>
        {description}
      </Text>
    </Card>
  );
};
