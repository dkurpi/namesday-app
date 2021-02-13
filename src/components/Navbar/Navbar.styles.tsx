import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface ILogo {
  primary?: boolean;
  secondary?: boolean;
}

export const Nav = styled.nav`
  width: 100%;
  background-color: ${({ theme }: any) => theme.primary};
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

export const LogoText = styled.div<ILogo>`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  ${({ theme, secondary }) =>
    secondary &&
    css`
      color: ${theme.gray};
      font-weight: 300;
    `};
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-transform: none;
  color: ${({ theme }) => theme.white};
  border-bottom: 5px solid transparent;
  padding: 20px 40px;
  font-weight: 500;
  transition: 0.2s;
  :hover {
    border-bottom: 5px solid ${({ theme }) => theme.bright};
    color: ${({ theme }) => theme.bright};
  }
`;
