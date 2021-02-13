import React, { useState, useContext } from "react";
import { Search, Button, Dates, Wrapper } from "../components";

import { ListContext } from "../context/savedList";
import {
  changeNumberToMonth,
  getAllNamesFromNameDays,
} from "../utils/namedaysHelpers";
import { getByName } from "../utils/fetchHandlers";

export function SearchContainer({ country }: { country: CountryCode }) {
  const [namesdayDates, setNamesdayDates] = useState<SingleDateNames[]>([]);
  const [name, setName] = useState<string>("");
  const [searchName, setSearchName] = useState<string>("");
  const [namesdayPeople, setNamesdayPeople] = useState<string[]>([]);
  const [markedDates, setMarkedDates] = useState<number[]>([]);

  const { savedList, setSavedList } = useContext(ListContext);

  const handleInputTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSearchClick = () => {
    if (!name.length) return alert("Type name");
    getByName(name, country)
      .then((res) => {
        setSearchName(name);
        setNamesdayDates(res);
        setNamesdayPeople(getAllNamesFromNameDays(res));
      })
      .catch((err) => alert(err.message));
    setMarkedDates([]);
  };

  const handleSaveButton = () => {
    if (!searchName.length) return alert("Type name and click search!");
    if (!markedDates.length) return alert("Select dates to save!");
    if (!namesdayDates.length)
      return alert("There is not any namedays for this name :(");
    if (setSavedList === undefined) return;

    if (!savedList?.every(({ name }) => name !== searchName))
      return alert(
        `You have already saved ${name} on your list. Go to 'Saved list' to remove this name`
      );

    const dates = markedDates.map((idx) => namesdayDates[idx]);

    const savedName: SavedName = {
      name: searchName,
      dates,
    };
    setSavedList((state) => [savedName, ...state]);
    setMarkedDates([]);
    alert(`Saved, you can find saved namesday in "Saved tab"`);
  };

  const handleMarkers = (idx: number) => {
    markedDates.includes(idx)
      ? setMarkedDates((state) => {
          const nextState = [...state];
          nextState.splice(markedDates.indexOf(idx), 1);
          return nextState;
        })
      : setMarkedDates((state) => [...state, idx]);
  };

  const handleSelectAllMarkers = () => {
    const allIndex = new Array(namesdayDates.length)
      .fill(0)
      .map((_, idx) => idx);
    setMarkedDates(allIndex);
  };

  return (
    <Wrapper>
      <Search>
        <Wrapper flex margin="5em 0 6em" justifyContent="space-around">
          <Search.Title>Get name days by name:</Search.Title>
          <form onSubmit={(e) => e.preventDefault()} action="">
            <Search.Input value={name} onChange={handleInputTyping} />
            <Button onClick={handleSearchClick} primary text="Search" />
          </form>
        </Wrapper>
        {namesdayDates.length !== 0 && (
          <>
            <Wrapper
              justifyContent="space-between"
              alignItems="center"
              margin="20px 0"
            >
              <Search.Text size="large">
                <>
                  <b>{searchName}</b>
                  {` has nameday at:`}
                </>
              </Search.Text>
              <Button
                onClick={handleSelectAllMarkers}
                secondary
                text="SelectAll"
              />
              <Button
                onClick={handleSaveButton}
                accept
                text="Save selected dates!"
              />
            </Wrapper>
            <Dates.Container>
              {namesdayDates?.map(({ day, month }, idx) => (
                <Dates.Card
                  key={String(day) + String(month)}
                  day={day}
                  month={changeNumberToMonth(month)}
                  marked={markedDates.includes(idx)}
                  onClick={() => handleMarkers(idx)}
                />
              ))}
            </Dates.Container>

            <Search.SimliarDays>
              <Search.Text size="large">
                People who also have nameday at the same days:{" "}
              </Search.Text>
              <Search.Text size="small">
                {namesdayPeople
                  .filter((name) => name !== searchName)
                  .join(",  ")}
              </Search.Text>
            </Search.SimliarDays>
          </>
        )}

        {!!searchName.length && !namesdayDates.length ? (
          <Search.SimliarDays>
            <Search.Text size="large">
              <b>{`Didn't found any nameday for: "${searchName.toUpperCase()}"   `}</b>
            </Search.Text>
            <Search.Text size="medium">{`Maybe ${searchName.toUpperCase()} is from another country?`}</Search.Text>
          </Search.SimliarDays>
        ) : null}
      </Search>
    </Wrapper>
  );
}
