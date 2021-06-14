import React from 'react';

import { View, Text, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default class SplashScreen extends React.Component {


    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 5000);
      }

    render() {
  return (
      <ImageBackground style={{flex: 1}} source={require('../assets/splashscreentwo.jpg')}>

    </ImageBackground>
    
  );
    }
};
