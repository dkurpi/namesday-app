import React from "react";
import styled, { css } from "styled-components";

interface WrapperProps {
  center?: boolean;
  flex?: boolean;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  flexDirection?: string;
}

const StyledWrapper = styled.div`
  max-width: ${({ theme }: any) => theme.maxWidth};
  margin: 0 auto;
  ${({ center }: any) =>
    center &&
    css`
      text-align: center;
    `};

  ${({ flex }: any) =>
    flex &&
    css`
      display: flex;
      width: 100%;
    `};

  ${({ justifyContent }: any) =>
    justifyContent &&
    css`
      display: flex;
      width: 100%;
      justify-content: ${justifyContent};
    `};
  ${({ alignItems }: any) =>
    alignItems &&
    css`
      display: flex;
      width: 100%;
      align-items: ${alignItems};
    `};
  ${({ margin }: any) =>
    margin &&
    css`
      margin: ${margin};
    `};
  ${({ flexDirection }: any) =>
    flexDirection &&
    css`
      display: flex;
      width: 100%;
      flex-direction: ${flexDirection};
    `};
`;

export const Wrapper: React.FC<WrapperProps> = ({ children, ...restProps }) => {
  return <StyledWrapper {...restProps}>{children}</StyledWrapper>;
};
