"use client";
import { IReview } from "@/typings/show";
import { Box, Heading } from "@chakra-ui/react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";

interface IShowReviewSection {
  addShowReview: (review: IReview) => void;
  reviews: IReview[];
  deleteShowReview: (review: IReview) => void;
}

export const ShowReviewSection = ({
  addShowReview,
  reviews,
  deleteShowReview,
}: IShowReviewSection) => {
  return (
    <Box maxW={"100%"} w={"700px"} p={1} m={3}>
      <Heading as="h3" size="lg">
        Reviews
      </Heading>
      <ReviewForm addShowReview={addShowReview} />
      <ReviewList reviews={reviews} deleteShowReview={deleteShowReview} />
    </Box>
  );
};
