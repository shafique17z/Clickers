// App.js
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from '../App';
import SplashScreen from '../app/components/SplashScreen';

const StackNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    App: {
      screen: App,
    },
  },
  {
    initialRouteName: 'SplashScreen',
  }
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
