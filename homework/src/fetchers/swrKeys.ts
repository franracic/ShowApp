const apiUrl = "https://tv-shows.infinum.academy";

export const swrKeys = {
  register: `${apiUrl}/users`,
  login: `${apiUrl}/users/sign_in`,
  currentUser: `${apiUrl}/users/me`,
  newReview: `${apiUrl}/reviews`,
  listShows: `${apiUrl}/shows`,
  topRatedShows: `${apiUrl}/shows/top_rated`,
  show: (id: string) => `${apiUrl}/shows/${id}`,
};
