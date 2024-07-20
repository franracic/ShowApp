import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ShowsList } from "./ShowsList";

describe("ShowsList", () => {
  const mockShows = [
    {
      title: "Test Show 1",
      average_rating: 4.5,
      image_url: "https://fakeimg.pl/600x400?text=Test+Show+1",
      id: "1",
      description: "Some Description",
    },
    {
      title: "Test Show 2",
      average_rating: undefined,
      image_url: "https://fakeimg.pl/600x400?text=Test+Show+2",
      id: "2",
      description: "Some Description",
    },
  ];
  it("should render all provided shows", () => {
    render(<ShowsList shows={mockShows} />);
    const showCards = document.querySelectorAll("[data-testid='show-card']");
    console.log(mockShows.length, showCards.length);
    expect(showCards.length).toBe(mockShows.length);
    Array.from(showCards).map((showCard, index) => {
      expect(showCard).toHaveTextContent(
        mockShows[index].title +
          (mockShows[index].average_rating
            ? `${mockShows[index].average_rating.toFixed(2)}/5`
            : "No Ratings")
      );
      expect(showCard).toHaveAttribute(
        "href",
        `/all-shows/${mockShows[index].id}`
      );
    });
  });
});
