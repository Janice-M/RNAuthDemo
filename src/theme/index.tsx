import React from 'react';
import {light, dark} from '@eva-design/eva';
import {myTheme as appTheme} from './AuthTheme';

export const themes = {
  light,
  dark,
  appTheme,
};
/**
 * provides theme and toggleTheme handler
 */
export const ThemeContext = React.createContext({
  theme: 'appTheme',
  toggleTheme: () => {},
});
