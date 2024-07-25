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
import { DeleteModal } from "./DeleteModal/DeleteModal";
import { EditModal } from "./EditModal/EditModal";

interface IReviewItem extends IReview {
  show_id: string;
}

export const ReviewItem = ({
  rating,
  comment,
  user,
  id,
  show_id,
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
      bg={"whiteAlpha.300"}
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
            <DeleteModal review_id={id} show_id={show_id} />
            <Button
              colorScheme="blue"
              size={"xs"}
              ml="auto"
              onClick={onOpen}
              w={"100%"}
              name="edit"
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
