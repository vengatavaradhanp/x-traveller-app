// pages/_app.tsx
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../src/i18n';
import Footer from '../components/Footer';
import AppNavbar from '@/components/AppNavbar';



function App({ Component, pageProps }: AppProps) {

  const [toggleMode, setToggleMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem('toggleMode') || 'false');
    setToggleMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('toggleMode', JSON.stringify(toggleMode));
  }, [toggleMode]);

  const ToggleModeFunc = () => {
    setToggleMode(!toggleMode);
  };


  return (
    <CustomProvider theme={toggleMode ? 'light' : 'dark'}>
      <I18nextProvider i18n={i18n}>
        <AppNavbar toggleMode={toggleMode} onToggleMode={ToggleModeFunc}  />
        <Component {...pageProps} />
        <Footer theme={toggleMode ? 'light' : 'dark'} />
      </I18nextProvider>
    </CustomProvider>
  );
}

export default App;
