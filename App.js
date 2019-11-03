
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import LoginScreen from './login';
import Tabs from './tabs';

const stacknavigator = createStackNavigator({
  login: LoginScreen,
  tabs: Tabs
});


export default createAppContainer (stacknavigator)









