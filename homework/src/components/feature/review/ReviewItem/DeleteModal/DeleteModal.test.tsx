import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { DeleteModal } from "./DeleteModal";

describe("DeleteModal component", () => {
  const mockDeleteShowReview = jest.fn();
  const reviewId = "123";

  beforeEach(() => {
    render(
      <DeleteModal
        review_id={reviewId}
        deleteShowReview={mockDeleteShowReview}
      />
    );
  });

  it("should render the delete button", () => {
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    expect(deleteButton).toBeInTheDocument();
  });

  it("should open the modal when the delete button is clicked", () => {
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    const modal = screen.getByTestId("delete-modal");
    expect(modal).toBeInTheDocument();
  });

  it("should call deleteShowReview when the delete button inside the modal is clicked", () => {
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    const modalDeleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(modalDeleteButton);

    expect(mockDeleteShowReview).toHaveBeenCalledWith(reviewId);
  });
});
