import React from "react";
import * as ROUTES from "../../utils/routes";
import { LogoText, Nav, StyledLink as Link } from "./Navbar.styles";
import { Wrapper } from "../";

export default function Navbar() {
  return (
    <Nav>
      <Wrapper flex>
        <Link style={{ marginRight: "auto" }} to={ROUTES.HOME}>
          <LogoText>NAMESDAY</LogoText>
          <LogoText secondary>search</LogoText>
        </Link>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.SAVED}>Saved</Link>
      </Wrapper>
    </Nav>
  );
}
