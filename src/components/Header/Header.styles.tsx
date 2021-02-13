import styled, { css } from "styled-components";

export const MainSection = styled.main`
  max-width: ${({ theme }: any) => theme.maxWidth};
  margin: auto;
  display: flex;
  height: 40vh;
  flex-direction: column;
  justify-content: center;
`;
export const SecondSection = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Title = styled.h1`
  margin: 10px 0;
  font-size: 3.4em;
  text-align: center;
  padding: 0.1em;
  font-weight: 700;
`;
export const MainText = styled.h2`
  text-align: left;
  font-size: 2em;
  ${({ theme, mark }: any) =>
    mark &&
    css`
      border-left: 10px solid ${theme.primary};
    `};
  padding: 10px 0 10px 20px;
  font-weight: 00;
`;
export const SecontText = styled.h4`
  margin: 1.4em 0;
  font-size: 14px;
  text-align: left;
  letter-spacing: 0.7px;
  font-weight: 500;
`;
export const WhiteBoard = styled.div`
  display: flex;
  background-color: white;
  padding: 0.1em 0 2em;
`;
export const Aside = styled.div`
  display: flex;
  justify-content: flex-end;
  alighn-items: flex-end;
  width: 100%;
`;
export const AsideCard = styled.div`
  padding: 1em;
  width: 17vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CountryText = styled.h1`
  font-size: 18px;
  font-weight: 400;
`;
export const SelectInput = styled.select`
  max-width: 12ch;
  padding: 0.25em 0.5em;
  border: none;
  font-size: 1.2rem;
  font-family: Montserrat;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.4;
  background-color: transparent;
  margin: 0 auto 0 1em;
`;
export const Callendar = styled.input`
  background-color: transparent;
  cursor: pointer;
  font-size: 1.4em;
  padding: 8px;
  margin: 0 20px;
  text-decoration: none;
  border: none;
  font-family: montserrat;
  border-bottom: 5px solid #ddd;
  transition: 0.2s;
  :focus {
    background-color: transparent;
    outline: none;
    border-bottom: 5px solid ${({ theme }: any) => theme.primary};
  }
  :hover {
    outline: none;
    border-bottom: 5px solid ${({ theme }: any) => theme.primary};
  }
`;
