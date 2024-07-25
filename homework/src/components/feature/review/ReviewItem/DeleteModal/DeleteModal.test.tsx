import { deleteReview } from "@/fetchers/reviews";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { DeleteModal } from "./DeleteModal";

// jest.mock("@fetchers/reviews", () => {
//   return {
//     deleteReview: jest.fn(),
//   };
// });

describe("DeleteModal component", () => {
  const reviewId = "123";

  beforeEach(() => {
    render(<DeleteModal review_id={reviewId} show_id={"15"} />);
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

  // it("should call deleteShowReview when the delete button inside the modal is clicked", () => {
  //   const deleteButton = screen.getByRole("button", { name: /delete/i });
  //   fireEvent.click(deleteButton);

  //   const modalDeleteButton = screen.getByRole("button", { name: /delete/i });
  //   fireEvent.click(modalDeleteButton);

  //   expect(deleteReview).toHaveBeenCalledWith(reviewId);
  // });
});
