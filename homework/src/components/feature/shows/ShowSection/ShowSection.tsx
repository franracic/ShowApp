"use client";
import { ShowDetails } from "@/components/feature/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "@/components/feature/shows/ShowReviewSection/ShowReviewSection";
import { IReview, IShow } from "@/typings/show";
import { Box } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

export default function ShowSection({ show }: { show: IShow }) {
  const [reviews, setReviews] = useState<IReview[]>(() => {
    const localData = localStorage.getItem("reviews-list");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    if (reviews.length === 0) {
      localStorage.removeItem("reviews-list");
    } else {
      localStorage.setItem("reviews-list", JSON.stringify(reviews));
    }
  }, [reviews]);

  const average_rating = useMemo(() => {
    if (!reviews.length) return 0;
    const sum = reviews.reduce((sum, review) => sum + review.rating, 0);
    return parseFloat((sum / reviews.length).toFixed(2));
  }, [reviews]);

  const addShowReview = (newReview: IReview) => {
    setReviews([newReview, ...reviews]);
  };

  const deleteShowReview = (review: IReview) => {
    setReviews(
      reviews.filter((r) => JSON.stringify(r) !== JSON.stringify(review))
    );
  };
  return (
    <Box>
      <ShowDetails {...show} average_rating={average_rating} />
      <ShowReviewSection
        addShowReview={addShowReview}
        reviews={reviews}
        deleteShowReview={deleteShowReview}
      />
    </Box>
  );
}
