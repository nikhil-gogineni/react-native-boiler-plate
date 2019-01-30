import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/pages/home'
import Profile from '../components/pages/profile'

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile },
});

export default NavigationInApp = createAppContainer(MainNavigator);