import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping} from '@eva-design/eva';
import {ThemeContext, themes} from '../theme';

type ProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({children}: ProviderProps) => {
  const [theme, setTheme] = React.useState(themes.appTheme);

  const toggleTheme = () => {
    theme === themes.appTheme
      ? setTheme(themes.dark)
      : setTheme(themes.appTheme);
  };

  return (
    <React.Fragment>
      <IconRegistry icons={[EvaIconsPack]} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider mapping={mapping} theme={theme}>
          {children}
        </ApplicationProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default AppProvider;
