import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Navbar } from "./components";
import { Home, SavedList } from "./pages";
import * as ROUTES from "./utils/routes";

interface SavedName {
  name: string;
  dates: SingleDate[];
}

export interface ListContext {
  savedList: SavedName[];
  setSavedList: React.Dispatch<React.SetStateAction<SavedName[]>>;
}

export const ListNamesdayContext = createContext<Partial<ListContext>>({});

function App() {
  const [savedList, setSavedList] = useState<SavedName[]>([]);

  return (
    <Router>
      <ListNamesdayContext.Provider value={{ savedList, setSavedList }}>
        <Navbar />
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route exact path={ROUTES.SAVED}>
            <SavedList />
          </Route>
          <Route path="*">
            <Redirect to={ROUTES.HOME} />
          </Route>
        </Switch>
      </ListNamesdayContext.Provider>
    </Router>
  );
}

export default App;
