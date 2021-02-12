import React from "react";
import { countries } from "../../utils/countries";
import { CountryCode } from "../../utils/API";

interface HeaderProps {
  names?: string[];
  namesTommorow?: string[];
  namesYesterday?: string[];
  selectedDate?: string;
  changeDate?: any;
  country?: CountryCode;
  changeContry?: (slug: CountryCode) => void;
}

export default function Header({
  selectedDate,
  changeDate,
  changeContry = () => {},
  names,
  country,
  namesYesterday,
  namesTommorow,
}: HeaderProps) {
  return (
    <div
      style={{
        padding: "5vh 15vw",
        backgroundColor: "rgb(71,165,233,0.1)",
      }}
    >
      <select
        id="country"
        name="country"
        onChange={(e) => {
          const slug = e.target.value as CountryCode;
          changeContry(slug);
        }}
        value={country}
      >
        {countries.map(({ name, slug }) => (
          <option key={slug} value={slug}>
            {name}
          </option>
        ))}
      </select>
      <input
        type="date"
        min="2021-01-01"
        max="2022-12-31"
        value={selectedDate}
        placeholder="mm-dd-yyyy"
        onChange={(e) => {
          changeDate(e.target.value);
        }}
      />
      <h1>{names?.join(", ")}</h1>

      <h1>Tommorow: {namesTommorow?.join(", ") || "Loading..."}</h1>
      <h1>Yesterday: {namesYesterday?.join(", ") || "Loading..."}</h1>
    </div>
  );
}
