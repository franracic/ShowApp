"use client";
import { ShowDetails } from "@/components/feature/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "@/components/feature/shows/ShowReviewSection/ShowReviewSection";
import { INewReview, IReview, IShow } from "@/typings/show";
import { Box } from "@chakra-ui/react";

export default function ShowSection({
  show,
  reviews,
  addShowReview,
  deleteShowReview,
}: {
  show: IShow;
  reviews: IReview[];
  addShowReview: (review: INewReview) => void;
  deleteShowReview: (reviewId: string) => void;
}) {
  return (
    <Box>
      <ShowDetails {...show} average_rating={show.average_rating} />
      <ShowReviewSection
        reviews={reviews}
        deleteShowReview={deleteShowReview}
        addShowReview={addShowReview}
        id={show.id}
      />
    </Box>
  );
}
