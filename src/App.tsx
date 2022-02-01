import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './global/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View>
        <Text>Hello World</Text>
      </View>
    </ThemeProvider>
  );
}

export default App;
