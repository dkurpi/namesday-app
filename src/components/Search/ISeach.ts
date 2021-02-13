export interface SeachElements {
  Title: React.FC;
  Input: React.FC<IInput>;
  Text: React.FC<IText>;
  SimliarDays: React.FC;
}

interface IInput {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IText {
  size?: "small" | "medium" | "large";
}
