import { fetcher } from "@/fetchers/fetcher";
import { INewReview, IReview } from "@/typings/show";
import { swrKeys } from "./swrKeys";

interface IReviewResponse {
  reviews: IReview[];
}

export function getReviews(showId: string) {
  return fetcher<IReviewResponse>(swrKeys.listReviews(showId));
}

export function newReview(review: INewReview) {
  return fetcher<IReview>(swrKeys.newReview, {
    method: "POST",
    body: JSON.stringify(review),
  });
}

export function deleteReview(reviewId: string) {
  return fetcher(swrKeys.deleteReview(reviewId), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
