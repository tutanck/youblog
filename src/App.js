import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, FormControl, Select, MenuItem } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { theme } from './utils/app-identity';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppContextProvider } from './context/AppContext';
import {
  loadPreferredLanguage,
  storePreferredLanguage,
} from './utils/preferred-language';
import supportedLanguages, {
  defaultLanguage,
} from './utils/supported-languages';
import langs from './static/resources/langs';
import Blog from './page/Blog';
import BlogPost from './page/BlogPost';
import StickyFooter from './component/StickyFooter';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  formControlContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    margin: theme.spacing(1),
    marginTop: theme.spacing(8),
  },
}));

export default function App() {
  const classes = useStyles();

  const [language, setLanguage] = useState(
    loadPreferredLanguage() || defaultLanguage,
  );

  const updateLanguage = (currentLanguage) => {
    storePreferredLanguage(currentLanguage);
    setLanguage(currentLanguage);
  };

  const lang = langs[language];

  return (
    <div>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className={classes.root}>
            <AppContextProvider value={{ lang, language }}>
              <Switch>
                <Route path="/blog/:row/:slug">
                  <BlogPost />
                </Route>

                <Route path="/">
                  <Blog lang={lang} />
                </Route>
              </Switch>
            </AppContextProvider>
          </div>

          <div className={classes.formControlContainer}>
            <FormControl>
              <Select
                value={language}
                onChange={(e) => updateLanguage(e.target.value)}
              >
                {Object.keys(supportedLanguages).map((key) => (
                  <MenuItem key={key} value={key}>
                    {supportedLanguages[key].name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </ThemeProvider>
      </div>

      <StickyFooter lang={lang} language={language} />
    </div>
  );
}
