export interface HeaderElements {
  Background: React.FC;
  SelectInput: React.FC<ISelectInput>;
  Option: React.FC<IOption>;
  Callendar: React.FC<ICallendar>;
  MainText: React.FC<IMainText>;
  SecondText: React.FC;
  WhiteBoard: React.FC;
  Aside: React.FC;
  AsideCard: React.FC;
  CountryText: React.FC;
  Title: React.FC;
  MainSection: React.FC;
  SecondSection: React.FC;
}

interface ISelectInput {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface IOption {
  value: string;
  name: string;
}

interface ICallendar {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface IMainText {
  mark?: boolean;
}
