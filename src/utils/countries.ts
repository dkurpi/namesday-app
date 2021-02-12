import { CountryCode } from "../utils/API";
interface Country {
  name: string;
  slug: CountryCode;
}
export const countries: Country[] = [
  { name: "Austria", slug: "at" },
  { name: "Bulgaria", slug: "bg" },
  { name: "Croatia", slug: "hr" },
  { name: "Czechia", slug: "cz" },
  { name: "Denmark", slug: "dk" },
  { name: "Estonia", slug: "ee" },
  { name: "Finland", slug: "fi" },
  { name: "France", slug: "fr" },
  { name: "Germany", slug: "de" },
  { name: "Greece", slug: "gr" },
  { name: "Hungary", slug: "hu" },
  { name: "Italy", slug: "it" },
  { name: "Latvia", slug: "lv" },
  { name: "Lithuania", slug: "lt" },
  { name: "Poland", slug: "pl" },
  { name: "Russian Federation", slug: "ru" },
  { name: "Slovakia", slug: "sk" },
  { name: "Spain", slug: "es" },
  { name: "Sweden", slug: "se" },
  { name: "United States", slug: "us" },
];
