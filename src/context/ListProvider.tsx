import React, { useState } from "react";

interface SavedName {
  name: string;
  dates: SingleDate[];
}

interface SavedListContext {
  savedList: SavedName[];
  clearNames: () => void;
  deleteName: (id: number) => void;
  addName: (savedName: SavedName) => void;
}

const initialState = {
  savedList: [],
  clearNames: () => {},
  deleteName: () => {},
  addName: () => {},
};

export const ListContext = React.createContext<SavedListContext>(initialState);

export const ListProvider: React.FC = ({ children, ...restProps }) => {
  const [savedList, setSavedList] = useState<SavedName[]>([]);

  const addName = (nameObj: SavedName) => {
    setSavedList((state) => [nameObj, ...state]);
  };

  const deleteName = (id: number) => {
    if (setSavedList === undefined) return null;
    setSavedList((list: SavedName[]) => {
      const newList = [...list];
      newList.splice(id, 1);
      return newList;
    });
  };

  const clearNames = () => {
    setSavedList([]);
  };

  return (
    <ListContext.Provider
      value={{ savedList, clearNames, deleteName, addName }}
      {...restProps}
    >
      {children}
    </ListContext.Provider>
  );
};
