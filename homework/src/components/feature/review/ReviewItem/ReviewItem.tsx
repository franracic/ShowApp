import { IReview } from "@/typings/show";
import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { ReviewStarsValue } from "../ReviewStars/ReviewStarsValue";

interface IReviewItem extends IReview {
  index: number;
}

export const ReviewItem = ({
  email,
  avatar,
  rating,
  comment,
  index,
}: IReviewItem) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      bg={"whiteAlpha.100"}
      borderRadius={"lg"}
      padding={4}
      marginY={2}
    >
      <Avatar src={avatar} />
      <Box padding={4}>
        <Text fontSize={"sm"} color={"gray.400"}>
          {email}
        </Text>
        <Text fontSize={"lg"}>{comment}</Text>
        <ReviewStarsValue value={rating} />
      </Box>
      <Button colorScheme="red" size={"xs"} ml="auto" data-review={index}>
        Delete
      </Button>
    </Box>
  );
};
