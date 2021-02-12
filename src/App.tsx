import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Navbar } from "./components";
import { Home, SavedList } from "./pages";
import * as ROUTES from "./utils/routes";
import { ListContext } from "./context/savedList";

function App() {
  const [savedList, setSavedList] = useState<SavedName[]>([]);

  return (
    <Router>
      <ListContext.Provider value={{ savedList, setSavedList }}>
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
      </ListContext.Provider>
    </Router>
  );
}

export default App;
