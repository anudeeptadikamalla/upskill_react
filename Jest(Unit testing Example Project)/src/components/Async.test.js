import { render, screen } from "@testing-library/react";
import Async from "./Async";
import { json } from "body-parser";

describe("Async component", () => {
  test("renders post if succeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "p1",
          title: "First post",
        },
      ],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
