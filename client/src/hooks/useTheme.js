import { useState } from "react";
import { THEMELIST } from "../contexts/ThemeContext";

const useTheme = (defaultTheme) => {
  const [theme, setTheme] = useState(defaultTheme);
  return {
    theme,
    toggleTheme: () => {
      if (theme === THEMELIST.DARK) {
        setTheme(THEMELIST.LIGHT);
      } else {
        setTheme(THEMELIST.DARK);
      }
    },
  };
};

export default useTheme;
