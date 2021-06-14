import React from 'react';

import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class DetailsScreen extends React.PureComponent {
    render() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => this.props.navigation.goBack()}/>
      
    </View>
  );
    }
};


