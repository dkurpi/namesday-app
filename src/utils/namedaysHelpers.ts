export function changeNumberToMonth(monthNumber: number): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthNumber - 1];
}

export function getMonthDayObjectFromDate(date: string): SingleDate {
  const arrayWithDate = date.split("-").map(Number);
  return {
    month: arrayWithDate[1],
    day: arrayWithDate[2],
  };
}

export function getCurrentDate(): string {
  return new Date().toJSON().slice(0, 10);
}

export function getAllNamesFromNameDays(arr: SingleDateNames[]) {
  const names = arr.reduce((acc: string[], curr) => {
    console.log(curr);
    const currNames = curr.name.split(", ");
    return [...acc, ...currNames];
  }, []);
  const noRepeatedNames = new Set([...names]);

  return Array.from(noRepeatedNames);
}
