export const useColorMode = () => {
  const colorMode = useState<'light' | 'dark'>('color-mode', () => 'light');

  const setColorMode = (mode: 'light' | 'dark') => {
    colorMode.value = mode;
    if (import.meta.client) {
      localStorage.setItem('color-mode', mode);
      updateDocumentClass(mode);
    }
  };

  const toggleColorMode = () => {
    setColorMode(colorMode.value === 'light' ? 'dark' : 'light');
  };

  const updateDocumentClass = (mode: 'light' | 'dark') => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const initColorMode = () => {
    if (import.meta.client) {
      const savedMode = localStorage.getItem('color-mode') as 'light' | 'dark' | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialMode = savedMode || (prefersDark ? 'dark' : 'light');
      setColorMode(initialMode);
    }
  };

  return {
    colorMode,
    setColorMode,
    toggleColorMode,
    initColorMode,
  };
};
