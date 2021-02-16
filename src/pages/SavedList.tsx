import React, { useContext } from "react";
import { changeNumberToMonth } from "../utils/namedaysServices";
import { ListContext } from "../context/ListProvider";
import { Header, Search, Button, Dates, Wrapper } from "../components";

export function SavedList() {
  const { savedList, clearNames, deleteName } = useContext(ListContext);

  return (
    <>
      <Header>
        <Header.Title>Saved Name Days </Header.Title>
        <Header.SecondSection>
          {savedList.length !== 0 && (
            <Button danger text="Clear all" onClick={clearNames} />
          )}
        </Header.SecondSection>
      </Header>

      <Wrapper>
        {savedList.length !== 0 ? (
          <>
            {savedList?.map(({ name, dates }, id) => (
              <>
                <Wrapper
                  justifyContent="space-between"
                  alignItems="center"
                  margin="30px 0 20px"
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
                    <Dates.Card
                      marked
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
                {`There aren't any saved names. Save some in 'Home' `}
              </Header.MainText>
            </Header.MainSection>
          </Header.WhiteBoard>
        )}
      </Wrapper>
    </>
  );
}
