import * as React from "react";
import { ThemeContext } from "../context/ThemeContext";

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const themeValue = {
    isDarkTheme,
    setIsDarkTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default AppProviders;
