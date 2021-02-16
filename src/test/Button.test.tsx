import { Button } from "../components";
import { render, fireEvent } from "@testing-library/react";

describe("Button component testing", () => {
  test("renders text correctly", () => {
    const text = "click me!";
    const { getByText } = render(<Button text={text} onClick={() => {}} />);
    expect(getByText(text)).toBeInTheDocument();
  });

  test("calls onClick prop when clicked correctly", () => {
    const text = "click me!";
    const handleClick = jest.fn();
    const { getByText } = render(<Button text={text} onClick={handleClick} />);
    fireEvent.click(getByText(text));

    expect(handleClick).toHaveBeenCalledTimes(1)
  });
});
