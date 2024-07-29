import { INewReview } from "@/typings/show";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ReviewStarsInput } from "../../review/ReviewStars/ReviewStarsInput";

export const ReviewForm = ({
  addShowReview,
  id,
}: {
  addShowReview: (review: INewReview) => void;
  id: string;
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const onSubmit = (data: any) => {
    if (Number.isNaN(data.rating) || data.rating < 1 || data.rating > 5) {
      return;
    }
    addShowReview({
      rating: data.rating,
      comment: data.comment,
      show_id: id,
    });
    setRating(0);
    setValue("comment", "");
    setValue("rating", 0);
  };
  const { register, formState, setValue, handleSubmit } = useForm();

  return (
    <VStack
      as="form"
      alignItems="stretch"
      spacing={6}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={Boolean(formState.errors.comment)}>
        <Textarea
          placeholder="Add review"
          maxH={200}
          bg="white"
          color="black"
          borderRadius={24}
          padding={4}
          {...register("comment", {
            required: "This field is required",
          })}
        />
        <FormErrorMessage>
          {formState.errors.comment?.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <HStack alignItems="flex-start" justifyContent="space-between">
        <Box p={2}>
          <ReviewStarsInput
            label={`${rating} / 5`}
            value={rating}
            onChange={(rating) => {
              register("rating", { required: "This field is required" });
              setValue("rating", rating);
              setRating(rating);
            }}
          />
        </Box>
        <Button type="submit" variant="light">
          Post
        </Button>
      </HStack>
    </VStack>
  );
};
