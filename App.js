import 'react-native-gesture-handler';
import React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createStackNavigator();

export default class App extends React.Component  {

  constructor(props) {
    super(props);
}

  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen}  options={{title: 'Splash Screen', headerShown: false ,  headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Stack.Screen name="Home" component={HomeScreen}  options={{title: 'Home Screen',  headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'Details Screen', headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

        }
};


