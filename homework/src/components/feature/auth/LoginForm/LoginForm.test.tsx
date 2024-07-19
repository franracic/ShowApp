import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import useSWRMutation from "swr/mutation";
import { LoginForm } from "./LoginForm";

jest.mock("swr/mutation", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("react-hook-form", () => {
  const originalModule = jest.requireActual("react-hook-form");
  let values: { [key: string]: any } = {};

  return {
    ...originalModule,
    useForm: jest.fn().mockReturnValue({
      handleSubmit: (fn: any) => () => fn(values),
      register: jest.fn().mockImplementation((name: string) => ({
        name,
        onChange: (e: any) => {
          values[name] = e.target.value;
        },
      })),
      formState: { errors: {}, isSubmitting: false },
      getValues: jest.fn().mockImplementation(() => values),
      reset: jest.fn().mockImplementation(() => {
        values = {};
      }),
    }),
  };
});

describe("LoginForm", () => {
  const mockTrigger = jest.fn();

  beforeEach(() => {
    (useSWRMutation as jest.Mock).mockReturnValue({
      trigger: mockTrigger,
      error: null,
    });
    (useSWRMutation as jest.Mock).mockReturnValue({
      trigger: mockTrigger.mockImplementation(() =>
        Promise.resolve({
          authHeaders: {
            client: "mockClient",
            token: "mockToken",
            uid: "mockUid",
          },
        })
      ),
      error: null,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render email and password fields and a submit button", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("should call trigger with the correct data when the form is submitted", async () => {
    render(<LoginForm />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");

    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    await waitFor(() => {
      expect(mockTrigger).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
    });
  });
});
