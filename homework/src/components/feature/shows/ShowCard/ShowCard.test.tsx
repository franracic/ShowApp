import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ShowCard } from "./ShowCard";

describe("ShowCard", () => {
  const mockShow = {
    title: "Test Show",
    average_rating: undefined,
    image_url: "https://fakeimg.pl/600x400?text=Test+Show",
    id: "1",
  };
  it("should contain image element with provided url", () => {
    render(<ShowCard {...mockShow} />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockShow.image_url);
  });

  it("should render show title", () => {
    render(<ShowCard {...mockShow} />);

    const title = screen.getByRole("heading", { name: mockShow.title });
    expect(title).toBeInTheDocument();
  });

  it("should render correct average rating", () => {
    render(<ShowCard {...mockShow} />);

    const rating = screen.getByTestId("rating-badge");
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveTextContent(
      mockShow.average_rating ? `${mockShow.average_rating}/5` : "No Ratings"
    );
  });
});
