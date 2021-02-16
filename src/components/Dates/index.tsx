import React from "react";
import { Card, Container, Day, Month } from "./Dates.styles";

interface IDateElements {
  Card: React.FC<ICard>;
  Container: React.FC;
}
interface ICard {
  day: string | number;
  month: string | number;
  marked?: boolean;
  onClick?: () => void;
}

export const Dates: React.FC<IDateElements> & IDateElements = ({
  children,
  ...restProps
}) => <div {...restProps}>{children}</div>;

Dates.Card = ({ day, month, ...restProps }) => (
  <Card data-testid="date-card" {...restProps}>
    <Day>{day}</Day>
    <Month>{month}</Month>
  </Card>
);

Dates.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);
