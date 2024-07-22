import { IShow } from "@/typings/show";
import { render } from "@testing-library/react";
import { ShowCard } from "../ShowCard/ShowCard";
import { ShowsList } from "./ShowsList";

jest.mock("../ShowCard/ShowCard", () => {
  return {
    ShowCard: jest.fn().mockReturnValue(null),
  };
});

describe("ShowList", () => {
  const mockShows: Array<IShow> = [
    {
      id: "1",
      title: "Show 1",
      description: "Description 1",
      average_rating: 4,
      image_url: "image1.jpg",
    },
    {
      id: "2",
      title: "Show 2",
      description: "Description 2",
      average_rating: 3,
      image_url: "image2.jpg",
    },
  ];

  it("should call ShowCard with correct props", () => {
    render(<ShowsList shows={mockShows} />);

    expect(ShowCard).toHaveBeenCalledTimes(2);
    expect(ShowCard).toHaveBeenNthCalledWith(1, { ...mockShows[0] }, {});
    expect(ShowCard).toHaveBeenNthCalledWith(2, { ...mockShows[1] }, {});
  });
});
