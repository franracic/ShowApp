"use client";
import { getShow } from "@/fetchers/show";
import { Box, Card, CardBody, Link, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../ReviewContext/ReviewContext";
import { ReviewItem } from "../ReviewItem/ReviewItem";

export const RecentReviews = () => {
  let uid = "";
  const authHeaderString = localStorage.getItem("auth-header");
  if (authHeaderString) {
    const authHeader = JSON.parse(authHeaderString);
    uid = authHeader.uid;
  }

  const { newReviews } = useContext(ReviewContext);
  const [showData, setShowData] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const fetchShowData = async () => {
      const data: { [key: string]: any } = {};
      for (const review of newReviews) {
        if (!data[review.show_id]) {
          const showResponse = await getShow(review.show_id);
          data[review.show_id] = showResponse?.show;
        }
      }
      setShowData(data);
    };

    fetchShowData();
  }, [newReviews]);

  return (
    <>
      <Card p={8} bg={"purpleSecond"}>
        <CardBody>
          <VStack spacing={0}>
            <Text>Email:</Text>
            <Text fontWeight={700}>{uid}</Text>

            {newReviews.length > 0 && (
              <>
                <Text mt={10}>Recent Reviews:</Text>
                <Box width={"100%"}>
                  {newReviews.map((review, index) => {
                    const show = showData[review.show_id];
                    return (
                      <Box key={index}>
                        <Link href={`/all-shows/${show?.id}`}>
                          <Text>{show?.title}</Text>
                        </Link>
                        <ReviewItem
                          {...review}
                          user={{ email: "", avatar: show?.image_url ?? "" }}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </>
            )}
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};
