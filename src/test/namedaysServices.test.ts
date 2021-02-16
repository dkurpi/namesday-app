import {
  changeNumberToMonth,
  getAllNamesFromNameDays,
  getMonthDayObjectFromDate,
} from "../utils/namedaysServices";

describe("Name days Services tests - changeNumberToMonth", () => {
  test("Should change number to month name", () => {
    expect(changeNumberToMonth(1)).toBe("January");
    expect(changeNumberToMonth(5)).toBe("May");
    expect(changeNumberToMonth(9)).toBe("September");
    expect(changeNumberToMonth(12)).toBe("December");
  });
});

describe("Name days Services tests  - getAllNamesFromNameDays", () => {
  test("Should get all names from dates", () => {
    const arg = [
      {
        month: 2,
        day: 1,
        name: "Dawid, Sebastian, Marcin, Kasia",
      },
      {
        month: 12,
        day: 14,
        name: "Dawid, Bartek, Marcin, Kasia",
      },
    ];

    const output = getAllNamesFromNameDays(arg);
    const expected = ["Dawid", "Bartek", "Sebastian", "Marcin", "Kasia"];

    expect(output).toEqual(expect.arrayContaining(expected));
  });

  test("Should return empty string array", () => {
    const arg = [
      {
        month: 2,
        day: 1,
        name: "",
      },
      {
        month: 12,
        day: 14,
        name: "",
      },
    ];

    const output = getAllNamesFromNameDays(arg);

    expect(output).toEqual(['']);
  });
});

describe("Name days Services tests  - getMonthDayObjectFromDate", () => {
  test("Should get object from string", () => {
    expect(getMonthDayObjectFromDate("2020-02-23")).toEqual({
      month: 2,
      day: 23,
    });
    expect(getMonthDayObjectFromDate("2340-12-13")).toEqual({
      month: 12,
      day: 13,
    });
    expect(getMonthDayObjectFromDate("2040-06-03")).toEqual({
      month: 6,
      day: 3,
    });
    expect(getMonthDayObjectFromDate("2010-01-03")).toEqual(
      expect.objectContaining({
        month: 1,
        day: 3,
      })
    );
  });
});
