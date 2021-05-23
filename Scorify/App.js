import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import GamesList from './components/game/games-list';
import AppHeader from './components/main/app-header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import NewGame from './components/game/new-game';
import Game from './components/game/game';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="games-list" component= { GamesList } />
        <Stack.Screen name="new-game" component= { NewGame} />
        <Stack.Screen name="game" component= { Game } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
