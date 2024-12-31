import React, {createContext, useState, useContext} from 'react'

const Theme = createContext();

export function ThemeProvider({ children }) {
     const [isDarkMode, setIsDarkMode] = useState(false);

     const toggleTheme = () => {
          setIsDarkMode(!isDarkMode);
     };

     return (
          <Theme.Provider value={{isDarkMode, toggleTheme}}>
               {children}
          </Theme.Provider>
     )
}

export const useTheme = () => useContext(Theme)