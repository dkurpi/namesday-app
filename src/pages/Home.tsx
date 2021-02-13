import React, { useState, useEffect } from "react";
import { Header, Wrapper } from "../components";
import { SearchContainer } from "../containers/SearchContainer";
import { countries } from "../utils/countries";

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
  const [country, setCountry] = useState<CountryCode>("pl");

  const [names, setNames] = useState<string[]>([]);
  const [namesTommorow, setNamesTommorow] = useState<string[]>([]);
  const [namesYesterday, setNamesYesterday] = useState<string[]>([]);

  const handleCallendarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };
  const handleInputSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value as CountryCode);
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
      <Header>
        <Header.MainSection>
          <Header.SecondSection>
            <Header.MainText>on</Header.MainText>
            <Header.Callendar
              value={selectedDate}
              onChange={handleCallendarChange}
            />
            <Header.MainText> the name day is celebrated by:</Header.MainText>
          </Header.SecondSection>

          <Header.Title>{names?.join(", ") || "Loading..."}</Header.Title>
        </Header.MainSection>

        <Header.WhiteBoard>
          <Wrapper alignItems="center" justifyContent="flex-end">
            <Header.CountryText>Country:</Header.CountryText>

            <Header.SelectInput value={country} onChange={handleInputSelect}>
              {countries.map(({ name, slug }) => (
                <Header.Option key={slug} name={name} value={slug}>
                  {name}
                </Header.Option>
              ))}
            </Header.SelectInput>
            <Header.Aside>
              <Header.AsideCard>
                <Header.SecondText>
                  {namesTommorow?.join(", ") || "Loading..."}
                </Header.SecondText>
                <Header.MainText mark>Tommorow</Header.MainText>
              </Header.AsideCard>
              <Header.AsideCard>
                <Header.SecondText>
                  {namesYesterday?.join(", ") || "Loading..."}
                </Header.SecondText>
                <Header.MainText mark>Yesterday</Header.MainText>
              </Header.AsideCard>
            </Header.Aside>
          </Wrapper>
        </Header.WhiteBoard>
      </Header>
      <SearchContainer country={country} />
    </>
  );
}
