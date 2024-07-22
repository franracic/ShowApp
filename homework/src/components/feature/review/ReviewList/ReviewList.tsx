import { IReview } from "@/typings/show";
import { Box } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

export const ReviewList = ({
  reviews,
  show_id,
}: {
  reviews: IReview[];
  show_id: string;
}) => {
  return (
    <Box>
      {reviews.map((review, index) => (
        <ReviewItem key={index} show_id={show_id} {...review} />
      ))}
    </Box>
  );
};
