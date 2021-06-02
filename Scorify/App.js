import 'react-native-gesture-handler';

import React from 'react';

import GamesList from './components/games-list/games-list';
import PlayersList from './components/players-list/players-list';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewGame from './components/game/new-game';
import Game from './components/game/game';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Home = () => (
  <Tab.Navigator>
    <Tab.Screen name="Games List" component={GamesList} />
    <Tab.Screen name="Players List" component={PlayersList} />
  </Tab.Navigator>
);

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="New Game" component={ NewGame } />
        <Stack.Screen name="Game" component={ Game } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
