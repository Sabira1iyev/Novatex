import { createContext, useContext, useState, ReactNode } from "react";
import { lightTheme, darkTheme, Theme } from "@/contants/theme";

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const value = {
    theme: isDark ? darkTheme : lightTheme,
    isDark,
    toggleTheme: () => setIsDark((prev) => !prev),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
} 

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme, must be used in the ThemeProvider");
  return context;
}
