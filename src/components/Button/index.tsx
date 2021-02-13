import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  accept?: boolean;
  remove?: boolean;
  onClick: () => void;
}

export const Button = ({ text, ...restProps }: ButtonProps) => (
  <StyledButton {...restProps}>{text}</StyledButton>
);

const StyledButton = styled.button<any>`
  background: transparent;
  border-radius: 5px;
  padding: 0.75em 2em;
  margin: 0 15px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.2s;
  border: 3px solid transparent;
  :focus {
    outline: none;
  }

  ${({ theme, primary }: any) =>
    primary &&
    css`
      background-color: ${theme.primary};
      color: ${theme.white};

      :hover {
        background-color: ${theme.white};
        color: ${theme.primary};
        border-color: ${theme.primary};
      }
    `}

  ${({ theme, secondary }: any) =>
    secondary &&
    css`
      background-color: ${theme.white};
      color: ${theme.primary};
      border-color: ${theme.primary};
      font-weight: 600;
      :hover {
        background-color: ${theme.primary};
        color: ${theme.white};
      }
    `}

    ${({ theme, danger }: any) =>
    danger &&
    css`
      background-color: ${theme.pink};
      color: ${theme.white};
      :hover {
        transform: scale(0.97);
      }
    `}

    ${({ theme, remove }: any) =>
    remove &&
    css`
      color: ${theme.pink};
      border: 2px solid ${theme.pink};
      :hover {
        background-color: ${theme.pink};
        color: ${theme.white};
      }
    `}

    ${({ theme, accept }: any) =>
    accept &&
    css`
      background-color: ${theme.green};
      color: ${theme.white};
      font-weight: 600;
      :hover {
        color: ${theme.green};
        background-color: ${theme.white};
        border: 3px solid ${theme.green};
      }
    `}
`;
