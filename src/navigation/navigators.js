import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import ConnectionsSubScreen from '../screens/connections/ConnectionsSubScreen';
import ExploreSubScreen from '../screens/explore/ExploreSubScreen';
import MessagesSubScreen from '../screens/messages/MessagesSubScreen';
import ProfileSubScreen from '../screens/profile/ProfileSubScreen';

import LoadingScreen from '../screens/auth/LoadingScreen';
import LoginSubScreen from '../screens/auth/LoginSubScreen';
import SignupSubScreen from '../screens/auth/SignupSubScreen';

import {
  // blackBG,
  // greyDark,
  // greyMedium,
  // greyMediumDark,
  tabHeight,
  // white,
  // yellow,
} from '../../utils/style-sheet';

const TabNav = createBottomTabNavigator(
  {
    Explore: { screen: ExploreSubScreen },
    Connections: { screen: ConnectionsSubScreen },
    Messages: { screen: MessagesSubScreen },
    Profile: { screen: ProfileSubScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // stuff here
    }),
    initialRouteName: 'Explore',
    tabBarOptions: {
      // activeTintColor: white,
      // inactiveTintColor: greyMedium,
      // activeBackgroundColor: greyMediumDark,
      // activeBackgroundColor: blackBG,
      // inactiveBackgroundColor: blackBG,
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
