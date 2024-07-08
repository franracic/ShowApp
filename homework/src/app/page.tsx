"use client";
import { ShowDetails } from "@/components/feature/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "@/components/feature/shows/ShowReviewSection/ShowReviewSection";
import { IReview } from "@/typings/show";
import { useEffect, useMemo, useState } from "react";
import styles from "./page.module.css";

export default function Page() {
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

  const averageRating = useMemo(() => {
    if (!reviews.length) return 0;
    const sum = reviews.reduce((sum, review) => sum + review.rating, 0);
    return parseFloat((sum / reviews.length).toFixed(2));
  }, [reviews]);

  const addShowReview = (newReview: IReview) => {
    setReviews([newReview, ...reviews]);
  };

  const deleteShowReview = (review: IReview) => {
    console.log(review);
    setReviews(
      reviews.filter((r) => JSON.stringify(r) !== JSON.stringify(review))
    );
  };
  return (
    <main className={styles.main}>
      <ShowDetails
        title="The Sopranos"
        description="Drama series that follows the life of mob boss Tony Soprano as he navigates the challenges of leading a criminal organization while managing his personal and family issues."
        averageRating={averageRating}
      />
      <ShowReviewSection
        addShowReview={addShowReview}
        reviews={reviews}
        deleteShowReview={deleteShowReview}
      />
    </main>
  );
}
