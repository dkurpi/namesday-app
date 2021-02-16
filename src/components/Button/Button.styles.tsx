import styled, { css } from "styled-components";

type IButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  accept?: boolean;
  remove?: boolean;
};

export const StyledButton = styled.button<IButtonProps>`
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

  ${({ theme, primary }) =>
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

  ${({ theme, secondary }) =>
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

    ${({ theme, danger }) =>
    danger &&
    css`
      background-color: ${theme.pink};
      color: ${theme.white};
      :hover {
        transform: scale(0.97);
      }
    `}

    ${({ theme, remove }) =>
    remove &&
    css`
      color: ${theme.pink};
      border: 2px solid ${theme.pink};
      :hover {
        background-color: ${theme.pink};
        color: ${theme.white};
      }
    `}

    ${({ theme, accept }) =>
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
