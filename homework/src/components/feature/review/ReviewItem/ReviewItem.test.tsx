import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ReviewItem } from "./ReviewItem";

describe("ReviewItem", () => {
  const mockReview = {
    email: "fran.racic@gmail.com",
    avatar: "https://fakeimg.pl/600x400?text=Test+Show",
    rating: 3.32,
    comment: "Some Comment",
    deleteShowReview: jest.fn(),
  };

  it("should render correct user email", () => {
    render(<ReviewItem {...mockReview} />);
    const email = screen.getByText(mockReview.email);

    expect(email).toBeInTheDocument();
  });

  it("should render correct rating", () => {
    render(<ReviewItem {...mockReview} />);
    const rating = screen.getByTestId("rating-badge");

    expect(rating).toBeInTheDocument();
    expect(rating).toHaveTextContent(`${mockReview.rating}/5`);
  });

  it("should render correct review comment", () => {
    render(<ReviewItem {...mockReview} />);
    const comment = screen.getByText(mockReview.comment);

    expect(comment).toBeInTheDocument();
  });

  it("should render delete button", () => {
    render(<ReviewItem {...mockReview} />);
    const deleteButton = screen.getByRole("button", { name: "Delete" });

    expect(deleteButton).toBeInTheDocument();
  });

  it("should call onDelete callback with necessary data", () => {
    render(<ReviewItem {...mockReview} />);
    const deleteButton = screen.getByRole("button", { name: "Delete" });
    deleteButton.click();

    expect(mockReview.deleteShowReview).toHaveBeenCalledTimes(1);
    expect(mockReview.deleteShowReview).toHaveBeenCalledWith({
      email: mockReview.email,
      avatar: mockReview.avatar,
      rating: mockReview.rating,
      comment: mockReview.comment,
    });
  });
});
