export type CountryCode =
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

export type Day =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Response {
  dates: { day: Day; month: Month };
  namedays: {
    bg?: string;
    lt?: string;
    ee?: string;
    lv?: string;
    gr?: string;
    ru?: string;
    at?: string;
    dk?: string;
    fr?: string;
    it?: string;
    sk?: string;
    cz?: string;
    es?: string;
    hr?: string;
    pl?: string;
    us?: string;
    de?: string;
    fi?: string;
    hu?: string;
    se?: string;
  };
}

export interface ResponseSpecific {
  "country name": string;
  "country code": CountryCode;
  results: { day: Day; month: Month; name: string }[];
}
