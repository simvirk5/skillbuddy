import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import BuddiesScreen from '../screens/buddies/BuddiesScreen';
import CategoryScreen from '../screens/explore/CategoryScreen';
import ExploreScreen from '../screens/explore/ExploreScreen';
import HomeScreen from '../screens/home/HomeScreen';
import MessagesScreen from '../screens/messages/MessagesScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
// Login and Signup
import CongratsSubScreen from '../screens/auth/CongratsSubScreen';
import LoadingScreen from '../screens/auth/LoadingScreen';
import LoginSubScreen from '../screens/auth/LoginSubScreen';
import SignupSubScreen from '../screens/auth/SignupSubScreen';

import {
  tabHeight,
} from '../../variables/style-sheet';

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
    Category: CategoryScreen,
  },
  {
    initialRouteName: 'Explore',
    defaultNavigationOptions: {
      header: null,
    }
  }
);

const TabNav = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Explore: ExploreStack,
    Buddies: { screen: BuddiesScreen },
    Messages: { screen: MessagesScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // stuff here
    }),
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',
      activeBackgroundColor: 'purple',
      inactiveBackgroundColor: 'indigo',
      style: {
        height: tabHeight,
      },
      tabStyle: {
        // paddingBottom: 35
      },
      labelStyle: {
        paddingBottom: 31,
        fontSize: 15
      },
      safeAreaInset: {
        bottom: 'never'
      },
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Login: LoginSubScreen,
    Signup: SignupSubScreen,
    Congrats: CongratsSubScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppSwitch = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Auth: AuthStack,
    Main: TabNav
  },
  {
    initialRouteName: 'Loading'
  }
)

export default AppContainer = createAppContainer(AppSwitch);
