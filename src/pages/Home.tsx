import React, { useState, useEffect } from "react";
import { Header, NamedaySearcher } from "../components";
import axios from "axios";
import { CountryCode } from "../utils/API";
import {
  getMonthDayObjectFromDate,
  getCurrentDate,
} from "../utils/namedaysHelpers";

interface BodyResponseByDate {
  dates: SingleDate;
  namedays: { [Code in CountryCode]: string };
}

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
    console.log(day, month);
    axios(`/namedays?country=${country}&month=${month}&day=${day}`)
      .then((res) => {
        const body: BodyResponseByDate = res.data.data;
        setNames(body.namedays[country].split(", "));
      })
      .catch((err) => alert(err.message));
  }, [selectedDate, country]);

  useEffect(() => {
    axios(`https://api.abalin.net/tomorrow?country=${country}
    `)
      .then((res) => {
        const body: BodyResponseByDate = res.data.data;
        setNamesTommorow(body.namedays[country].split(", "));
      })
      .catch((err) => alert(err.message));

    axios(`https://api.abalin.net/yesterday?country=${country}
    `)
      .then((res) => {
        const body: BodyResponseByDate = res.data.data;
        setNamesYesterday(body.namedays[country].split(", "));
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
