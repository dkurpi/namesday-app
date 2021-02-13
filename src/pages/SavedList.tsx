import React, { useContext } from "react";
import { changeNumberToMonth } from "../utils/namedaysHelpers";
import { ListContext } from "../context/savedList";
import { Header, Search, Button, Dates, Wrapper } from "../components";

export default function SavedList() {
  const { savedList, setSavedList } = useContext(ListContext);

  const clearNames = () => {
    if (setSavedList) setSavedList([]);
  };
  const deleteName = (id: number) => {
    if (setSavedList === undefined) return null;
    setSavedList((list: SavedName[]) => {
      const newList = [...list];
      newList.splice(id, 1);
      return newList;
    });
  };

  return (
    <>
      <Header>
        <Header.Title>Saved Namesday </Header.Title>
        <Header.SecondSection>
          {!!savedList?.length && (
            <Button danger text="Clear all" onClick={clearNames} />
          )}
        </Header.SecondSection>
      </Header>

      <Wrapper>
        {!!savedList?.length ? (
          <>
            {savedList?.map(({ name, dates }, id) => (
              <>
                <Wrapper
                  justifyContent="space-between"
                  alignItems="center"
                  margin="30px 0 10px"
                >
                  <Search.Text size="large">
                    <>
                      <b>{name}</b>
                      {` has nameday at:`}
                    </>
                  </Search.Text>
                  <Button
                    text="Delete"
                    remove
                    onClick={() => {
                      deleteName(id);
                    }}
                  />
                </Wrapper>
                <Dates.Container>
                  {dates.map(({ month, day }) => (
                    <Dates.Card marked
                      key={String(day) + String(month)}
                      day={day}
                      month={changeNumberToMonth(month)}
                    />
                  ))}
                </Dates.Container>
              </>
            ))}
          </>
        ) : (
          <Header.WhiteBoard>
            <Header.MainSection>
              <Header.MainText>
                {`There isn't any saved names. Save some in 'Home' `}
              </Header.MainText>
            </Header.MainSection>
          </Header.WhiteBoard>
        )}
      </Wrapper>
    </>
  );
}
