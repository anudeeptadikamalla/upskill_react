import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello React !!! as text", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const helloR = screen.getByText("Hello React !!", { exact: false });
    expect(helloR).toBeInTheDocument();
  });

  test("renders Its good to see you if button not clicked", () => {
    render(<Greeting />);

    const paraele = screen.getByText("Its good to see you", { exact: false });
    expect(paraele).toBeInTheDocument();
  });
  test("renders How Are you if button is clicked", () => {
    render(<Greeting />);

    // ACT
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const Chnagedparagraph = screen.getByText("How Are you", { exact: false });
    expect(Chnagedparagraph).toBeInTheDocument();
  });
  test('does not render "good to see you" if button was not clicked', () => {
    render(<Greeting />);

    // ACT
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const Chnagedparagraph = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(Chnagedparagraph).toBeNull();
  });
});
