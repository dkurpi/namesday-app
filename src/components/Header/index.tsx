import React from "react";
import { HeaderElements } from "./IHeader";
import {
  SecontText,
  WhiteBoard,
  Aside,
  AsideCard,
  CountryText,
  Title,
  MainText,
  SelectInput,
  Callendar,
  MainSection,
  SecondSection,
} from "./Header.styles";

export const Header: React.FC & HeaderElements = ({ children }) => {
  return <Header.Background>{children}</Header.Background>;
};

Header.Background = ({ children, ...restProps }) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(71,165,233,0.1)",
        boxSizing: "border-box",
        padding: "5vh 0 ",
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

Header.SelectInput = ({ children, value, onChange, ...restProps }) => {
  return (
    <SelectInput
      id="country"
      name="country"
      onChange={onChange}
      value={value}
      {...restProps}
    >
      {children}
    </SelectInput>
  );
};

Header.Option = ({ name, value, ...restProps }) => {
  return (
    <option value={value} {...restProps}>
      {name}
    </option>
  );
};

Header.Callendar = ({ onChange, value, ...restProps }) => {
  return (
    <Callendar
      type="date"
      min="2021-01-01"
      max="2022-12-31"
      value={value}
      placeholder="mm-dd-yyyy"
      onChange={onChange}
      {...restProps}
    />
  );
};

Header.MainText = ({ children, ...restProps }) => {
  return <h1 {...restProps}>{children}</h1>;
};

Header.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Header.MainText = ({ children, ...restProps }) => {
  return <MainText {...restProps}>{children}</MainText>;
};
Header.SecondText = ({ children, ...restProps }) => {
  return <SecontText {...restProps}>{children}</SecontText>;
};
Header.WhiteBoard = ({ children, ...restProps }) => {
  return <WhiteBoard {...restProps}>{children}</WhiteBoard>;
};

Header.Aside = ({ children, ...restProps }) => {
  return <Aside {...restProps}>{children}</Aside>;
};
Header.AsideCard = ({ children, ...restProps }) => {
  return <AsideCard {...restProps}>{children}</AsideCard>;
};
Header.CountryText = ({ children, ...restProps }) => {
  return <CountryText {...restProps}>{children}</CountryText>;
};
Header.MainSection = ({ children, ...restProps }) => {
  return <MainSection {...restProps}>{children}</MainSection>;
};
Header.SecondSection = ({ children, ...restProps }) => {
  return <SecondSection {...restProps}>{children}</SecondSection>;
};
