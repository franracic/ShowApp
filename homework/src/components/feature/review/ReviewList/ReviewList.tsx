import { IReview } from "@/typings/show";
import { Box } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

export const ReviewList = ({
  reviews,
  deleteShowReview,
}: {
  reviews: IReview[];
  deleteShowReview: (review: IReview) => void;
}) => {

  return (
    <Box>
      {reviews.map((review, index) => (
        <ReviewItem key={index} {...review} deleteShowReview={deleteShowReview} />
      ))}
    </Box>
  );
};
