/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Game from './components/game/game'
import AppHeader  from './components/app-header';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppHeader></AppHeader>
      <Game></Game>
    </SafeAreaProvider>
  );
};

export default App;
