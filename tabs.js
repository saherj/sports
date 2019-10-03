import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './home';
import AboutScreen from './about';
import SettingScreen from './settings';

export default createBottomTabNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Settings: SettingScreen               

})

