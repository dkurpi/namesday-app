import React from "react";
import { LogoText, Nav, StyledLink } from "./Navbar.styles";

interface ILogo {
  primary?: boolean;
  secondary?: boolean;
}

interface NavbarElements {
  Link: typeof StyledLink;
  Logo: React.FC<ILogo>;
}

export const Navbar: React.FC & NavbarElements = ({
  children,
  ...restProps
}) => <Nav {...restProps}>{children}</Nav>;

Navbar.Link = StyledLink;
Navbar.Logo = LogoText;
