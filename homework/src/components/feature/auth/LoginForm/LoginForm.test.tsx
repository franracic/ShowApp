import { mutator } from "@/fetchers/mutators";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

// jest.mock("@/fetchers/mutators", () => {
//   return {
//     mutator: jest.fn().mockResolvedValue(null),
//   };
// });

describe("Login Form", () => {
  it("should render email input field", () => {
    render(<LoginForm />);

    const email = screen.getAllByPlaceholderText("Enter email")[0];
    expect(email).toBeInTheDocument();
  });

  it("should render password input field", () => {
    render(<LoginForm />);

    const password = screen.getByPlaceholderText("Password");
    expect(password).toBeInTheDocument();
  });
  

  // it("should render button and submit on clicking", async () => {
  //   render(<LoginForm />);
  //   const button = screen.getByTestId("login-button");
  //   expect(button).toBeInTheDocument();

  //   const email = screen.getByPlaceholderText("Enter email");
  //   fireEvent.change(email, { target: { value: "fran@gmail.com" } });

  //   const password = screen.getByPlaceholderText("Password");

  //   fireEvent.change(password, { target: { value: "test" } });

  //   fireEvent.click(button);

  //   await waitFor(() => {
  //     expect(mutator).toHaveBeenCalledWith({
  //       email: "fran@gmail.com",
  //       password: "test",
  //     });
  //     expect(mutator).toHaveBeenCalledTimes(1);
  //   });
  // });
});
