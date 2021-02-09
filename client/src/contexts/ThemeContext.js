import React from "react";
import useTheme from "../hooks/useTheme";

const THEMELIST = {
  DARK: "dark",
  LIGHT: "light",
};

// instantiate the context itself
const ThemeContext = React.createContext();

const ThemeProvider = ({ children, defaultTheme }) => {
  // state is initialized to the custom hook useTheme
  const state = useTheme(defaultTheme);

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, THEMELIST };