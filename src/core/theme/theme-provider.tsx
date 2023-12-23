import { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';

import { darkTheme, lightTheme } from '@styles/theme';

import type { ThemeDataProps, ThemeProps, ThemeProviderProps } from './theme-provider-props';

const ThemeProviderContext = createContext<ThemeDataProps | undefined>(undefined)

export const useThemeProvider = (): ThemeDataProps => {
  const context = useContext(ThemeProviderContext)
  if (!context) {
    throw new Error('useThemeProvider must be used within a ThemeProvider')
  }
  return context;
}

export default function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const colorScheme = Appearance.getColorScheme()
  const [isDark, changeTheme] = useState<boolean>(false)
  const [theme, setTheme] = useState<ThemeProps>(lightTheme)

  useEffect(() => {
    changeTheme(colorScheme === 'dark')
  }, [])
  useEffect(() => {
    isDark ? setTheme(darkTheme) : setTheme(lightTheme)
  }, [isDark])

  const contextValue: ThemeDataProps = {
    changeTheme, isDark, ...theme
  }

  return (
    <ThemeProviderContext.Provider value={contextValue}>
      {children}
    </ThemeProviderContext.Provider>
  );
}