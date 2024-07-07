import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex } from "@chakra-ui/react";

export const ReviewStarsValue = ({ value }: { value: number | undefined }) => {
  console.log(value ? (value % 1) * 16 : 0);
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
        <Flex>
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
