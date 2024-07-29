import { IShow } from "@/typings/show";
import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

export const ShowDetails = ({
  title,
  description,
  image_url,
  average_rating,
}: IShow) => {
  const placeholderImage = "https://fakeimg.pl/600x400?text=No+show+image";

  return (
    <Card overflow="hidden" variant="light">
      <Box position="relative" width="100%" height="400px">
        <Image
          src={image_url || placeholderImage}
          alt={title}
          objectFit={"cover"}
          h={"100%"}
          w={"100%"}
        />
      </Box>
      <CardBody>
        <Heading size="md" color="purpleBase">
          {title}
        </Heading>
        <Text pt="2" color="purpleBase">
          {description}
        </Text>
        <Text pt="2" fontWeight="bold" color="purpleBase">
          {average_rating ? `${average_rating.toFixed(1)} / 5` : "No ratings"}
        </Text>
      </CardBody>
    </Card>
  );
};
