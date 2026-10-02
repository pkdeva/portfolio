import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

const DarkModeContext = createContext<{ isDarkMode: boolean; toggleDarkMode: () => void } | undefined>(undefined);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error('useDarkMode must be used within a DarkModeProvider');
  return context;
};

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try { return localStorage.getItem('darkMode') !== 'false'; }
    catch { return true; }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDarkMode ? '#151a23' : '#f7f9fc');
    try { localStorage.setItem('darkMode', String(isDarkMode)); }
    catch { /* The theme still works when browser storage is unavailable. */ }
  }, [isDarkMode]);

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode: () => setIsDarkMode(previous => !previous) }}>{children}</DarkModeContext.Provider>;
};
