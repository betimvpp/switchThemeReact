import React, {useState} from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import { usePersistedState } from './utils/usePersistedState';

import { Header } from '../src/Header';
import GlobalStyle from './styles/global';

import light from './styles/theme/light';
import dark from './styles/theme/dark';

function App() {
  const [ theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () =>{
    setTheme(theme.title == 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
   
  );
}

export default App;
