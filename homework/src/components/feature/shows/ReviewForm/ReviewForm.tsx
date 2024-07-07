import { IReview } from "@/typings/show";
import {
  Box,
  Button,
  NumberInput,
  NumberInputField,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

interface ReviewForm {
  addShowReview: (review: IReview) => void;
}

const temporaryEmail = "user@gmail.com";
const temporaryAvatar = undefined;

export const ReviewForm = ({ addShowReview }: ReviewForm) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (Number.isNaN(rating) || rating < 1 || rating > 5) return;
    addShowReview({
      email: temporaryEmail,
      avatar: temporaryAvatar,
      rating,
      comment,
    });
    setRating(5);
    setComment("");
  };

  return (
    <Box my={4}>
      <NumberInput
        borderColor={"whiteAlpha.400"}
        min={1}
        max={5}
        value={rating}
        backgroundColor="whiteAlpha.200"
        clampValueOnBlur={false}
        onChange={(value) => setRating(parseInt(value))}
        mb={2}
      >
        <NumberInputField />
      </NumberInput>
      <Textarea
        borderColor={"whiteAlpha.400"}
        backgroundColor="whiteAlpha.300"
        placeholder="Write a review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        mb={2}
      />
      <Button type="submit" onClick={handleSubmit} colorScheme="blue">
        Add Review
      </Button>
    </Box>
  );
};
