import React, { useState, useContext } from "react";
import { CountryCode } from "../../utils/API";

import axios from "axios";
import { ListNamesdayContext } from "../../App";
import {
  changeNumberToMonth,
  getAllNamesFromNameDays,
} from "../../utils/namedaysHelpers";

interface PropsSearcher {
  country: CountryCode;
}

export default function NamedaySearcher({ country }: PropsSearcher) {
  const [namesdayDates, setNamesdayDates] = useState<
    SingleDateNames[]
  >([]);
  const [name, setName] = useState<string>("");
  const [searchName, setSearchName] = useState<string>("");
  const [namesdayPeoples, setNamesdayPeoples] = useState<string[]>([]);

  const { savedList, setSavedList } = useContext(ListNamesdayContext);

  const fetchData = (name: string) => {
    axios(`/getdate?name=${name}&country=${country}`)
      .then((res) => {
        const body: SingleDateNames[] = res.data.results;
        setNamesdayDates(body);
        getAllNamesFromNameDays(body);
        setNamesdayPeoples(getAllNamesFromNameDays(body));
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div style={{ height: "40vh", backgroundColor: "rgb(71,165,233,0.02)" }}>
      <h1>Namesearcher</h1>

      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="button"
        onClick={() => {
          fetchData(name);
          setSearchName(name);
        }}
        value="Submit"
      />
      <input
        type="button"
        onClick={() => {
          if (setSavedList === undefined) return;

          const savedName: SavedName = {
            name: searchName,
            dates: namesdayDates,
          };
          setSavedList((state) => [...state, savedName]);
          console.log(savedList);
        }}
        value="Save"
      />

      {namesdayDates.length !== 0 && (
        <>
          <h4>{`${searchName} has nameday at:`}</h4>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {namesdayDates.map(({ day, month }) => (
              <div
                key={String(day) + String(month)}
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "50px",
                  backgroundColor: "#ddd",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h1>{day}</h1>
                <h4>{changeNumberToMonth(month)}</h4>
              </div>
            ))}
          </div>
          <b>{`People whose laso have nameday at the same days: `}</b>
          <small>
            {namesdayPeoples.filter((name) => name !== searchName).join(",  ")}
          </small>
        </>
      )}

      {searchName.length !== 0 && namesdayDates.length === 0 ? (
        <h4>{`Didn't found any nameday for: "${searchName}" :(`}</h4>
      ) : null}
    </div>
  );
}
