
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import{ createBottomTabNavigator } from 'react-navigation-tabs';

// also npm install react-native-gesture-handler

// import HomeScreen from './home';
// import AboutScreen from './about';
// import SettingScreen from './settings';


import LoginScreen from './login';
import Tabs from './tabs';

const stacknavigator = createStackNavigator({
  login: LoginScreen,
  tabs: Tabs
});

// const tabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   About: AboutScreen,
//   Settings: SettingScreen

// });

export default createAppContainer (stacknavigator)
// export default createAppContainer (tabNavigator)
// this is only for tabnavigator








