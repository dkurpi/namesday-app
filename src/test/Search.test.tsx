import { Search } from "../components";
import { render, fireEvent } from "@testing-library/react";

describe("<Search/> component testing", () => {
  test("<Search.Input/> renders input correctly", () => {
    const { getByTestId } = render(
      <Search.Input value={"Dawid"} onChange={() => {}} />
    );
    const input = getByTestId("input");
    expect(input).toBeTruthy();
  });

  test("<Search.Input/> changes value correctly", async () => {
    const nameChange = jest.fn();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      nameChange(e.target.value);
    };
    const { findByTestId } = render(
      <Search.Input value={""} onChange={onChange} />
    );
    const input = await findByTestId("input");
    fireEvent.change(input, { target: { value: "test" } });

    expect(nameChange).toHaveBeenCalledWith("test");
  });
});
