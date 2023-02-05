import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';

import { StatesProvider } from './context/StatesProvider';

import App from './templates/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StatesProvider>
        <App />
        <GlobalStyles />
      </StatesProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
