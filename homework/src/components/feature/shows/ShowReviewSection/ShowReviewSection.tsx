"use client";
import { INewReview, IReview } from "@/typings/show";
import { Box, Heading } from "@chakra-ui/react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";

interface IShowReviewSection {
  reviews: IReview[];
  addShowReview: (review: INewReview) => void;
  id: string;
}

export const ShowReviewSection = ({
  reviews,
  addShowReview,
  id,
}: IShowReviewSection) => {
  return (
    <Box maxW={"100%"} w={"700px"} p={1} m={3} color={"white"}>
      <Heading as="h3" size="lg" color={"white"}>
        Reviews
      </Heading>
      <ReviewForm addShowReview={addShowReview} id={id} />
      <ReviewList reviews={reviews} show_id={id} />
    </Box>
  );
};
