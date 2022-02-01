import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {Home} from '@screens/Home';

import theme from '@global/styles/theme';
import {BackgroundTheme} from '@global/styles/background';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.textColor.white}
      />
      <BackgroundTheme>
        <Home />
      </BackgroundTheme>
    </ThemeProvider>
  );
}

export default App;
