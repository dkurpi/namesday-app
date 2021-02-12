import React from "react";

interface SavedName {
  name: string;
  dates: SingleDate[];
}

interface SavedListContext {
  savedList: SavedName[];
  setSavedList: React.Dispatch<React.SetStateAction<SavedName[]>>;
}

export const ListContext = React.createContext<Partial<SavedListContext>>({});
