import 'react-native-gesture-handler';

import React from 'react';

import GamesList from './components/games-list/games-list';
import PlayersList from './components/players-list/players-list';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewGame from './components/game/new-game';
import Game from './components/game/game';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Home = (props) => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Games List"
        component={GamesList}
        initialParams={{ navigation: props.navigation }}
      />
      <Tab.Screen name="Players List" component={PlayersList} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="New Game" component={NewGame} />
          <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
