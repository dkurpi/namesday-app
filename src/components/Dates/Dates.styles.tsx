import styled, { css } from "styled-components";

type ICard = {
  marked?: boolean;
};

export const Card = styled.div<ICard>`
  width: 200px;
  height: 240px;
  margin: 40px 25px;
  background-color: ${({ theme }) => theme.white};
  border-top: 10px solid ${({ theme }) => theme.primary};
  box-shadow: 11px 12px 19px -6px rgba(0, 0, 0, 0.09),
    -11px -12px 19px -6px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  user-select: none;
  transition: 0.2s;

  ${({ theme, marked }) =>
    marked &&
    css`
      border-top: 20px solid ${theme.green};
    `};

  ${({ onClick }) =>
    onClick &&
    css`
      :hover {
        transform: translateY(5px);
        cursor: pointer;
      }
    `};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Day = styled.h1`
  font-size: 4rem;
`;
export const Month = styled.h4``;
