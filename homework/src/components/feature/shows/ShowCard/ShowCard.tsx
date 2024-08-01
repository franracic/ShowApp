import { IShow } from "@/typings/show";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

const placeholderImage = "https://fakeimg.pl/600x400?text=No+show+image";

interface IShowCardProps extends Omit<IShow, "description"> {
  link: boolean;
}

export const ShowCard = ({
  title,
  average_rating,
  image_url,
  id,
  link = true,
}: IShowCardProps) => {
  return (
    <Card
      h={"100%"}
      {...(!link ? {} : { href: `/all-shows/${id}`, as: NextLink })}
      overflow="hidden"
      flexGrow={1}
      variant="light"
      minWidth={0}
      color={"purpleBase"}
      data-testid="show-card"
    >
      <Box position="relative" width="100%" flexGrow={1}>
        <Image
          src={image_url || placeholderImage}
          alt={title}
          data-testid="placeholder"
          sizes="(max-width: 768px) 25vw"
          h={"320px"}
          w={"100%"}
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <CardBody color="brand.800" flexGrow={0}>
        <Heading
          size="md"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {title}
        </Heading>
        <HStack>
          <StarIcon />
          <Text>{average_rating ? `${average_rating}/5` : "No rating"}</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};
