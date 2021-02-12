import React, { useState, useEffect } from "react";
import { Header, NamedaySearcher } from "../components";

import {
  getNameday,
  getTommorowNamedays,
  getYesterdayNamedays,
} from "../utils/fetchHandlers";
import {
  getMonthDayObjectFromDate,
  getCurrentDate,
} from "../utils/namedaysHelpers";

export default function Home() {
  const initialDate = getCurrentDate();
  const [selectedDate, setSelectedDate] = useState<string>(initialDate);
  const [names, setNames] = useState<string[]>([]);
  const [country, setCountry] = useState<CountryCode>("pl");

  const [namesTommorow, setNamesTommorow] = useState<string[]>([]);
  const [namesYesterday, setNamesYesterday] = useState<string[]>([]);

  const changeDate = (nextDate: string) => {
    setSelectedDate(nextDate);
  };
  const changeContry = (slug: CountryCode) => {
    setCountry(slug);
  };

  useEffect(() => {
    const { day, month } = getMonthDayObjectFromDate(selectedDate);

    getNameday(day, month, country)
      .then((res) => {
        setNames(res);
      })
      .catch((err) => alert(err.message));
  }, [selectedDate, country]);

  useEffect(() => {
    getYesterdayNamedays(country)
      .then((res) => {
        setNamesYesterday(res);
      })
      .catch((err) => alert(err.message));

    getTommorowNamedays(country)
      .then((res) => {
        setNamesTommorow(res);
      })
      .catch((err) => alert(err.message));
  }, [country]);

  return (
    <>
      <Header
        names={names}
        namesTommorow={namesTommorow}
        namesYesterday={namesYesterday}
        selectedDate={selectedDate}
        country={country}
        changeDate={changeDate}
        changeContry={changeContry}
      />
      <NamedaySearcher country={country} />
    </>
  );
}
