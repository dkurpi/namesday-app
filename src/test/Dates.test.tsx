import { Dates } from "../components";
import { render, fireEvent } from "@testing-library/react";

describe("<Dates /> component testing", () => {
  test("<Dates /> renders text correctly", () => {
    const { getByText } = render(
      <Dates.Container>
        <Dates.Card day={2} month={"March"} />
      </Dates.Container>
    );
    expect(getByText(2)).toBeInTheDocument();
    expect(getByText("March")).toBeInTheDocument();
  });

  test("<Dates.Card /> click works correctly", () => {
    const cardClick = jest.fn();
    const { getByTestId } = render(
      <Dates.Container>
        <Dates.Card onClick={() => cardClick()} day={5} month={"April"} />
      </Dates.Container>
    );
    const card = getByTestId("date-card");
    fireEvent.click(card);
    expect(cardClick).toHaveBeenCalledTimes(1);
    fireEvent.click(card);
    fireEvent.click(card);
    expect(cardClick).toHaveBeenCalledTimes(3);
  });
});
