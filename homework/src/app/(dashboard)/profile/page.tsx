"use client";
import { RegisterForm } from "@/components/feature/auth/RegisterForm/RegisterForm";
import { ReviewContext } from "@/components/feature/review/ReviewContext/ReviewContext";
import { Container } from "@chakra-ui/react";
import { useContext } from "react";

export default function Profile() {
  const { setHasNotification } = useContext(ReviewContext);
  setHasNotification(false);
  return (
    <Container maxHeight="100%">
      <RegisterForm />
    </Container>
  );
}
