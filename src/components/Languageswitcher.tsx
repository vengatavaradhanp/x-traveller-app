import React from 'react';
import { Nav ,Dropdown} from 'rsuite'; // Correct import for Nav
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
 // const router = useRouter(); // Using router if needed for navigation

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // If you want to navigate after changing the language, uncomment the next line
    // router.push(router.pathname); // This will reload the current page with the new language
  };

  return (
    <Dropdown title={t('Language')} trigger="hover">
      <Dropdown.Item onSelect={() => changeLanguage('en')}>English</Dropdown.Item>
      <Dropdown.Item onSelect={() => changeLanguage('fr')}>Français</Dropdown.Item>
      <Dropdown.Item onSelect={() => changeLanguage('ta')}>தமிழ்</Dropdown.Item>
    </Dropdown>
  );
};

export default LanguageSwitcher;
