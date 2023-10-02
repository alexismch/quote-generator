import { createContext, useContext, useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { Theme, getTheme } from '../assets/themes';

interface ThemeContext {
   theme: Theme;

   switchTheme: () => void;
}

const Context = createContext<ThemeContext | undefined>(undefined);

export const useThemeContext = () => {
   return useContext(Context);
};

export const ThemeProvider = ({ children }: any) => {
   const [theme, setTheme] = useState<Theme>(Theme.DARK);

   const switchTheme = () => {
      setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
   };

   return (
      <Context.Provider value={{ theme, switchTheme }}>
         <EmotionThemeProvider theme={getTheme(theme)}>
            {children}
         </EmotionThemeProvider>
      </Context.Provider>
   );
};
