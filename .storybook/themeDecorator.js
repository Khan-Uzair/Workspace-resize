import React from 'react';
import { ThemeProvider, defaultTheme } from "@beans/theme";
import customThemes from "./themes";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={{ ...defaultTheme, ...customThemes }}>
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;
