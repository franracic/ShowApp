import { IReview } from "@/typings/show";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ReviewStarsValue } from "../ReviewStars/ReviewStarsValue";
import { EditModal } from "./EditModal/EditModal";

interface IReviewItem extends IReview {
  deleteShowReview: (reviewId: string) => void;
  show_id: string;
}

export const ReviewItem = ({
  rating,
  comment,
  user,
  id,
  show_id,
  deleteShowReview,
}: IReviewItem) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <>
          <Flex direction="column" ml={"auto"} gap={4}>
            <Button
              colorScheme="red"
              size={"xs"}
              ml="auto"
              onClick={() => deleteShowReview(id)}
              w={"100%"}
            >
              Delete
            </Button>

            <Button
              colorScheme="blue"
              size={"xs"}
              ml="auto"
              onClick={onOpen}
              w={"100%"}
            >
              Edit
            </Button>
          </Flex>
          <EditModal
            isOpen={isOpen}
            onClose={onClose}
            comment={comment}
            review_id={id}
            rating={rating}
            show_id={show_id}
          />
        </>
      )}
    </Box>
  );
};
