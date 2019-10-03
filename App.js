
import { createAppContainer } from 'react-navigation';
import{ createBottomTabNavigator } from 'react-navigation-tabs'

// also npm install react-native-gesture-handler

import HomeScreen from './home';
import AboutScreen from './about';
import SettingScreen from './settings';
import LoginScreen from './login';

const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Settings: SettingScreen

})

export default createAppContainer (tabNavigator)








