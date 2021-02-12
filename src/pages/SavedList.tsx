import React, { useContext } from "react";
import { changeNumberToMonth } from "../utils/namedaysHelpers";
import { ListContext } from "../context/savedList";

export default function SavedList() {
  const { savedList, setSavedList } = useContext(ListContext);

  const clearDates = () => {
    if (setSavedList) setSavedList([]);
  };

  return (
    <>
      <h1>SavedList</h1>

      <input type="button" value="Clear all" onClick={clearDates} />
      {savedList?.length !== 0 && (
        <>
          <div>
            {savedList?.map(({ name, dates }) => (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <h4>{`${name} has nameday at:`}</h4>

                {dates.map(({ month, day }) => (
                  <div
                    key={String(month) + String(month)}
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
            ))}
          </div>
        </>
      )}
    </>
  );
}
