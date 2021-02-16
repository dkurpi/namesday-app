import React from "react";
import { StyledButton } from "./Button.styles";
export interface ButtonProps {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  accept?: boolean;
  remove?: boolean;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, ...restProps }) => (
  <StyledButton {...restProps}>{text}</StyledButton>
);
