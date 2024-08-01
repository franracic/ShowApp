"use client";
import { RecentReviews } from "@/components/feature/review/RecentReviews/RecentReviews";
import { ReviewContext } from "@/components/feature/review/ReviewContext/ReviewContext";
import { Container } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

export default function Profile() {
  const { setHasNotification } = useContext(ReviewContext);

  useEffect(() => {
    setHasNotification(false);
  }, [setHasNotification]);

  return (
    <Container maxHeight="100%">
      <RecentReviews />
    </Container>
  );
}
