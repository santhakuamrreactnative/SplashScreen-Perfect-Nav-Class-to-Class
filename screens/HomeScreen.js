import React from 'react';

import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default class HomeScreen extends React.Component {
    render() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Details" onPress={() => this.props.navigation.navigate('Details')}/>
    </View>
  );
    }
};


