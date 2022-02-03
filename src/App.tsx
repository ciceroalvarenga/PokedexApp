import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import store from '@store/store';

import theme from '@global/styles/theme';
import {Routes} from '@routes/Routes';
import {Provider} from 'react-redux';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.textColor.white}
        />
        <Provider store={store}>
          <Routes />
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
