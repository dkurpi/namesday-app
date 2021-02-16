import React from "react";
import styled, { css } from "styled-components";

type WrapperProps = {
  center?: boolean;
  flex?: boolean;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  flexDirection?: string;
};

export const Wrapper: React.FC<WrapperProps> = ({ children, ...restProps }) => {
  return <StyledWrapper {...restProps}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div<WrapperProps>`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      width: 100%;
    `};

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      display: flex;
      width: 100%;
      justify-content: ${justifyContent};
    `};
  ${({ alignItems }) =>
    alignItems &&
    css`
      display: flex;
      width: 100%;
      align-items: ${alignItems};
    `};
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};
  ${({ flexDirection }) =>
    flexDirection &&
    css`
      display: flex;
      width: 100%;
      flex-direction: ${flexDirection};
    `};
`;
