import { IReview } from "@/typings/show";
import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { ReviewStarsValue } from "../ReviewStars/ReviewStarsValue";

interface IReviewItem extends IReview {
  deleteShowReview: (reviewId: string) => void;
}

export const ReviewItem = ({
  rating,
  comment,
  user,
  id,
  deleteShowReview,
}: IReviewItem) => {
  let uid = "";
  const authHeaderString = localStorage.getItem("auth-header");
  if (authHeaderString) {
    const authHeader = JSON.parse(authHeaderString);
    uid = authHeader.uid;
  }

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      bg={"whiteAlpha.100"}
      borderRadius={"lg"}
      padding={4}
      marginY={2}
    >
      <Avatar src={user.avatar} />
      <Box padding={4}>
        <Text fontSize={"sm"} color={"gray.400"}>
          {user.email}
        </Text>
        <Text fontSize={"lg"}>{comment}</Text>
        <ReviewStarsValue value={rating} />
      </Box>
      {uid === user.email && (
        <Button
          colorScheme="red"
          size={"xs"}
          ml="auto"
          onClick={() => deleteShowReview(id)}
        >
          Delete
        </Button>
      )}
    </Box>
  );
};
