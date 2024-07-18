import { list } from "@chakra-ui/react";

const apiUrl = "https://tv-shows.infinum.academy";

export const swrKeys = {
  register: `${apiUrl}/users`,
  login: `${apiUrl}/users/sign_in`,
  currentUser: `${apiUrl}/users/me`,
  listShows: `${apiUrl}/shows`,
  topRatedShows: `${apiUrl}/shows/top_rated`,
  show: (id: string) => `${apiUrl}/shows/${id}`,
  newReview: `${apiUrl}/reviews`,
  listReviews: (showId: string) => `${apiUrl}/shows/${showId}/reviews`,
  deleteReview: (reviewId: string) => `${apiUrl}/reviews/${reviewId}`,
};
