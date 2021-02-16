import React from "react";
import { SeachElements } from "./ISeach";
import { Text, Input, SimliarDays, Form } from "./Search.styles";

export const Search: React.FC & SeachElements = ({ children }) => {
  return <div>{children}</div>;
};

Search.Title = ({ children, ...restProps }) => (
  <h1 {...restProps}>{children}</h1>
);

Search.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

Search.Input = ({ value, onChange, children, ...restProps }) => (
  <Input
    data-testid="input"
    type="text"
    name="name"
    id="name"
    value={value}
    onChange={onChange}
  />
);

Search.Form = ({ children, ...restProps }) => (
  <Form onSubmit={(e) => e.preventDefault()} action="" {...restProps}>
    {children}
  </Form>
);
Search.SimliarDays = ({ children, ...restProps }) => (
  <SimliarDays {...restProps}>{children}</SimliarDays>
);
