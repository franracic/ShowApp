import { INewReview } from "@/typings/show";
import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { ReviewStarsInput } from "../../review/ReviewStars/ReviewStarsInput";

const temporaryEmail = "user@gmail.com";
const temporaryAvatar = undefined;

export const ReviewForm = ({
  addShowReview,
  id,
}: {
  addShowReview: (review: INewReview) => void;
  id: string;
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isRatingValid, setIsRatingValid] = useState(true);

  const handleSubmit = () => {
    if (Number.isNaN(rating) || rating < 1 || rating > 5) {
      setIsRatingValid(false);
      return;
    }
    setIsRatingValid(true);
    addShowReview({
      rating,
      comment,
      show_id: id,
    });
    setRating(0);
    setComment("");
  };

  return (
    <Box my={4}>
      <Textarea
        borderColor={"whiteAlpha.400"}
        backgroundColor="whiteAlpha.300"
        placeholder="Write a review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        mb={2}
      />
      <Flex flexWrap={"wrap"}>
        <ReviewStarsInput label="rating" value={rating} onChange={setRating} />
        {!isRatingValid && (
          <Text color="red.500" fontSize={"xl"} ml={6}>
            Please select a rating!
          </Text>
        )}
      </Flex>
      <Button type="submit" onClick={handleSubmit} colorScheme="blue">
        Add Review
      </Button>
    </Box>
  );
};
