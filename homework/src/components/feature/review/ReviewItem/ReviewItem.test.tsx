import { useDisclosure } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ReviewItem } from "./ReviewItem";

jest.mock("@chakra-ui/react", () => {
  const actualChakra = jest.requireActual("@chakra-ui/react");
  return {
    ...actualChakra,
    useDisclosure: jest.fn(),
  };
});

describe("ReviewItem", () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      return JSON.stringify({
        uid: "test@example.com",
      });
    });
  });

  const mockReview = {
    user: {
      email: "test@example.com",
      avatar: "https://example.com/avatar.jpg",
    },
    rating: 5,
    comment: "Great show!",
    deleteShowReview: jest.fn(),
    show_id: "1",
    id: "42",
  };

  beforeEach(() => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      return JSON.stringify({ uid: "test@example.com" });
    });
  });

  it("should render correct user email", () => {
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: false,
      onOpen: jest.fn(),
      onClose: jest.fn(),
    });
    render(<ReviewItem {...mockReview} />);
    const email = screen.getByText(mockReview.user.email);

    expect(email).toBeInTheDocument();
  });

  it("should render correct rating", () => {
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: false,
      onOpen: jest.fn(),
      onClose: jest.fn(),
    });
    render(<ReviewItem {...mockReview} />);
    const rating = screen.getByTestId("rating-badge");

    expect(rating).toBeInTheDocument();
    expect(rating).toHaveTextContent(`${mockReview.rating}/5`);
  });

  it("should render correct review comment", () => {
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: false,
      onOpen: jest.fn(),
      onClose: jest.fn(),
    });
    render(<ReviewItem {...mockReview} />);
    const comment = screen.getByText(mockReview.comment);

    expect(comment).toBeInTheDocument();
  });

  it("should render edit button and delete button", () => {
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: false,
      onOpen: jest.fn(),
      onClose: jest.fn(),
    });

    render(<ReviewItem {...mockReview} />);
    const editButton = screen.getByRole("button", { name: "Edit" });
    const deleteButton = screen.getByRole("button", { name: "Delete" });

    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it("should edit modal with correct data", () => {
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: true,
      onOpen: jest.fn(),
      onClose: jest.fn(),
    });

    render(<ReviewItem {...mockReview} />);
    const commentInput = screen.getByTestId("edit-comment");
    const ratingInput = screen.getByTestId("rating-input");

    expect(commentInput).toHaveValue(mockReview.comment);
    expect(ratingInput).toBeInTheDocument();
  });
});
