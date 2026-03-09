import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

/**
 * Provider that expost Theme context with 
 * `theme` and `toggleTheme` function to change theme
 * @param {*} param0 
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use Theme context
 * @throws Error if used outside of ThemeProvider
 * @returns {Object} Theme context value
 * 
 * @example
 * const { theme, toggleTheme } = useTheme();
 * console.log(theme); // 'light' or 'dark'
 * toggleTheme(); // toggles the theme
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};