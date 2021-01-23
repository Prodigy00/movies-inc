import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import Home from './src/screens/home';
import MovieDetailScreen from './src/screens/movie-detail';
import Favourites from './src/screens/favourites';
import store from './store';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#AD021B"
          inactiveColor="#dedede"
          style={{ backgroundColor: '#000' }}
          barStyle={{ backgroundColor: '#0f0f0f', padding: 4 }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={28} />
              ),
            }}
          />
          <Tab.Screen
            name="MovieDetail"
            component={MovieDetailScreen}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="camera-metering-spot"
                  color={color}
                  size={28}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Favourites"
            component={Favourites}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={28}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
