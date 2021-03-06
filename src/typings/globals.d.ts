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

interface Country {
  name: string;
  slug: CountryCode;
}

type CountryCode =
  | "bg"
  | "lt"
  | "ee"
  | "lv"
  | "gr"
  | "ru"
  | "at"
  | "dk"
  | "fr"
  | "it"
  | "sk"
  | "cz"
  | "es"
  | "hr"
  | "pl"
  | "us"
  | "de"
  | "fi"
  | "hu"
  | "se";
