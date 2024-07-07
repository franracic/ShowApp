import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

interface IReviewStarsInput {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export const ReviewStarsInput = ({
  value,
  onChange,
  label,
}: IReviewStarsInput) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  return (
    <Box mb={3} id={label}>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <StarIcon
            key={index}
            boxSize={6}
            cursor="pointer"
            color={
              starValue <= (hoverValue ?? value) ? "blue.100" : "whiteAlpha.500"
            }
            onClick={() => onChange(starValue)}
            onMouseEnter={() => setHoverValue(starValue)}
            onMouseLeave={() => setHoverValue(null)}
          />
        );
      })}
    </Box>
  );
};
