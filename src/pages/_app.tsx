import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import '@/styles/globals.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)');
    setTheme(media.matches ? 'dark' : 'light');
  }, []);

  return { theme };
};

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();
  return (
    <CustomProvider theme={theme}>
      <Component {...pageProps} />
    </CustomProvider>
  );
}