import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored === 'light' || stored === 'dark') {
        setTheme(stored);
        return;
      }
    } catch (e) {
      // Ignore storage errors.
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Ignore storage errors.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return [theme, toggleTheme];
};

export default useTheme;
