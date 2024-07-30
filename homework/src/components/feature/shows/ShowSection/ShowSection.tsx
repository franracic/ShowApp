"use client";
import { ShowDetails } from "@/components/feature/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "@/components/feature/shows/ShowReviewSection/ShowReviewSection";
import { INewReview, IReview, IShow } from "@/typings/show";
import { Container, VStack } from "@chakra-ui/react";

export default function ShowSection({
  show,
  reviews,
  addShowReview,
}: {
  show: IShow;
  reviews: IReview[];
  addShowReview: (review: INewReview) => void;
}) {
  const average_rating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  return (
    <Container maxW="100%" padding={8} p={0}>
      <VStack alignItems="stretch" spacing={24}>
        <ShowDetails {...show} average_rating={show.average_rating} />
        <ShowReviewSection
          reviews={reviews}
          addShowReview={addShowReview}
          id={show.id}
        />
      </VStack>
    </Container>
  );
}
