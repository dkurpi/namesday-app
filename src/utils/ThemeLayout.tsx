import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  primary: "#55B8FF",
  secondary: "rgb(71,165,233,0.1)",
  black: "#161616",
  bright: "#FBFBFB",
  white: "#FFF",
  gray: "#666",
  pink: "#FF5555",
  maxWidth: "1280px",
  green: "#3c3",
};

export const ThemeLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
}

a:hover {
  color: rgb(0, 174, 255);
}
`;
