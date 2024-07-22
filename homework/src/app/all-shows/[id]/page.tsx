"use client";
import ShowSection from "@/components/feature/shows/ShowSection/ShowSection";
import { getReviews, newReview } from "@/fetchers/reviews";
import { getShow } from "@/fetchers/show";
import { swrKeys } from "@/fetchers/swrKeys";
import { INewReview } from "@/typings/show";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import useSWR, { mutate } from "swr";

export default function Page() {
  const params = useParams();
  const id = params.id as string;

  const { data, error, isLoading } = useSWR(swrKeys.show(id), () =>
    getShow(id)
  );

  const {
    data: reviewsData,
    error: reviewsError,
    isLoading: reviewsLoading,
  } = useSWR(swrKeys.listReviews(id), () => getReviews(id));

  const addShowReview = async (review: INewReview) => {
    try {
      await newReview(review);
      mutate(swrKeys.listReviews(id));
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  if (error || reviewsError) {
    return <Heading color={"white"}>Ups something went wrong...</Heading>;
  }

  if (!isLoading && !reviewsLoading && !data) {
    return (
      <Heading color={"white"}>
        No show found with id: {id}. Please check the URL and try again.
      </Heading>
    );
  }

  if (isLoading || reviewsLoading || !data) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  return (
    <ShowSection
      show={data.show}
      reviews={reviewsData?.reviews ?? []}
      addShowReview={addShowReview}
    />
  );
}
