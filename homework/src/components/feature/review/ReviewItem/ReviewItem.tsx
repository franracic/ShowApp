import { IReview } from "@/typings/show";
import { Avatar, Badge, Box, Button, Text } from "@chakra-ui/react";

interface IReviewItem extends IReview {
  deleteShowReview: (review: IReview) => void;
}

export const ReviewItem = ({
  email,
  avatar,
  rating,
  comment,
  deleteShowReview,
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
        <Badge
          colorScheme="blue"
          borderRadius={"lg"}
          padding={1}
          fontSize={"16px"}
        >
          {`${rating}/5`}
        </Badge>
      </Box>
      <Button
        colorScheme="red"
        size={"xs"}
        onClick={() => deleteShowReview({ email, avatar, rating, comment })}
        ml="auto"
      >
        Delete
      </Button>
    </Box>
  );
};
