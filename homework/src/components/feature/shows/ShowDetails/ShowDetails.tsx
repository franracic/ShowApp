import { IShow } from '@/typings/show';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

export const ShowDetails = ({ title, description, imageUrl, averageRating }:IShow) => {
  const placeholderImage = "https://fakeimg.pl/600x400?text=No+show+image";

  return (
    <Box display={"flex"} flexDirection={"column"} p={4} border={"1px solid #ccc"} borderRadius={"2xl"} boxShadow={"md"} bg={"#1f2937"} color={"white"} maxW={"100%"} w={"700px"} alignSelf={"center"} fontFamily={'"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;'}>
      <Image
        alignSelf={"center"}
        width={"100%"}
        src={imageUrl || placeholderImage}
        alt={title}
      />
        <Box display={"flex"} alignItems={"center"}>
          <Heading as="h2" size="lg" padding={4}>
            {title}
          </Heading>
          
          <Text padding={1} color={"#1f2937"} backgroundColor={"#c3ddfd"} borderRadius={"lg"}>
            {averageRating ?  `${averageRating.toFixed(2)}/5` : 'No Ratings'}
          </Text>
        </Box>
        <Text color={"rgba(211, 211, 211, 0.622)"} paddingX={4}>
          {description}
        </Text>
    </Box>
  );
};