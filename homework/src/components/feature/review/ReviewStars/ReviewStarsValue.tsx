import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex } from "@chakra-ui/react";

export const ReviewStarsValue = ({ value }: { value: number | undefined }) => {
  return (
    <Box>
      {!value ? (
        <Badge
          colorScheme="blue"
          borderRadius={"lg"}
          padding={1}
          fontSize={"16px"}
        >
          No Ratings
        </Badge>
      ) : (
        <Flex align={"center"}>
          <Badge
            colorScheme="blue"
            borderRadius={"lg"}
            padding={1}
            fontSize={"16px"}
            marginRight={2}
          >
            {`${value % 1 === 0 ? value : value.toFixed(2)}/5`}
          </Badge>
          {Array.from({ length: value }, (_, index) => {
            return <StarIcon key={index} boxSize={4} color="blue.100" />;
          })}
          <Flex width={`${(value % 1) * 16}px`} overflow={"hidden"}>
            <StarIcon color="blue.100" />
          </Flex>
        </Flex>
      )}
    </Box>
  );
};
