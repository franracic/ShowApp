import "@testing-library/jest-dom";

jest.mock("@/fetchers/mutators", () => {
  return {
    mutator: jest.fn().mockResolvedValue(null),
  };
});
describe("LoginForm", () => {
  it("should call mutator with correct arguments", async () => {
    const mockTrigger = jest.fn().mockResolvedValue({
      authHeaders: {
        client: "client",
        token: "token",
        uid: "uid",
      },
      data: {},
    });
  });
});
