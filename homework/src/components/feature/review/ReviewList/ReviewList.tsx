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
  const handleDeleteClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.target as HTMLButtonElement;
    if (button.tagName === "BUTTON" && button.dataset.review !== undefined) {
      deleteShowReview(reviews[parseInt(button.dataset.review)]);
    }
  };

  return (
    <Box onClick={handleDeleteClick}>
      {reviews.map((review, index) => (
        <ReviewItem key={index} {...review} index={index} />
      ))}
    </Box>
  );
};
