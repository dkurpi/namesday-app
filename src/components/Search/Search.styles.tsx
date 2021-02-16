import styled from "styled-components";

type TextType = {
  size?: string;
};

export const Text = styled.p<TextType>`
  font-weight: 300;
  font-size: 1.2em;

  ${({ size }) => size === "large" && "font-size: 2em; font-weight: 300"}
  ${({ size }) => size === "medium" && "font-size: 1.4em; font-weight: 400"}
  ${({ size }) => size === "small" && "font-size: 0.9em; font-weight: 600"}
`;

export const Input = styled.input`s
  cursor: pointer;
  font-size: 2em;
  padding: 8px 18px;
  text-decoration: none;
  border: none;
  font-family: montserrat;
  border-bottom: 3px solid #999;
  transition: 0.2s;
  background-color: white;
  :active {
    background-color: white;
  }
  :focus {
    outline: none;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
    background-color: white;
  }
  :hover {
    outline: none;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
  }
`;

export const SimliarDays = styled.div`
  padding: 50px;
  margin-bottom: 50px;
  text-align: center;
`;

export const Form = styled.form``;
export const Container = styled.div``;
export const Day = styled.h1``;
