interface SingleDate {
  month: number;
  day: number;
}

interface SingleDateNames extends SingleDate {
  name: string;
}

interface SavedName {
  name: string;
  dates: SingleDate[];
}
