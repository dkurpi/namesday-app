import React from "react";
import * as ROUTES from "../utils/routes";
import { Navbar, Wrapper } from "../components";

export function NavbarContainer() {
  return (
    <Navbar>
      <Wrapper flex>
        <Navbar.Link style={{ marginRight: "auto" }} to={ROUTES.HOME}>
          <Navbar.Logo>FindYour</Navbar.Logo>
          <Navbar.Logo secondary>NAMEDAY</Navbar.Logo>
        </Navbar.Link>
        <Navbar.Link to={ROUTES.HOME}>Home</Navbar.Link>
        <Navbar.Link to={ROUTES.SAVED}>Saved</Navbar.Link>
      </Wrapper>
    </Navbar>
  );
}
