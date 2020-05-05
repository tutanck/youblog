import { isLocalStorageAvailable } from './local-storage';
import supportedLanguages from './supported-languages';

const BLOG_PREFERRED_LANGUAGE_KEY = 'BLOG_STORED_PREFFERED_LANGUAGE';

const loadPreferredLanguage = () => {
  if (!isLocalStorageAvailable()) {
    return null;
  }

  const preferredLanguage = JSON.parse(
    localStorage.getItem(BLOG_PREFERRED_LANGUAGE_KEY),
  );
  return preferredLanguage;
};

const storePreferredLanguage = (preferredLanguage) => {
  if (!isLocalStorageAvailable()) {
    return;
  }
  if (!supportedLanguages[preferredLanguage]) {
    // eslint-disable-next-line no-throw-literal
    throw 'UNSUPPORTED_LANGUAGE';
  }

  localStorage.setItem(
    BLOG_PREFERRED_LANGUAGE_KEY,
    preferredLanguage ? JSON.stringify(preferredLanguage) : null,
  );
};

export { loadPreferredLanguage, storePreferredLanguage };
