import { createAppContainer, createStackNavigator } from 'react-navigation';
import SplashScreen from "..app/screens/SplashScreen"
import App from '../App';

const AppContainer = createAppContainer(AppNavigator);

const AppNavigator = createStackNavigator({
    Splash: {
      screen: SplashScreen,
    },
    Main: {
      screen: App,
    },
  });

export default AppContainer;
  
