import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import * as ROUTES from "./utils/routes";

import { ListProvider, ThemeLayout } from "./context";
import { Footer, Navbar } from "./containers";
import { Home, SavedList } from "./pages";

function App() {
  return (
    <Router>
      <ListProvider>
        <ThemeLayout>
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
          <Footer />
        </ThemeLayout>
      </ListProvider>
    </Router>
  );
}

export default App;
