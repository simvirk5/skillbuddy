import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import ConnectionsSubScreen from '../screens/connections/ConnectionsSubScreen';
import ExploreSubScreen from '../screens/explore/ExploreSubScreen';
import MessagesSubScreen from '../screens/messages/MessagesSubScreen';
import ProfileSubScreen from '../screens/profile/EProfileubScreen';

import LoadingScreen from '../screens/augh/LoadingScreen';
import Login from '../screens/augh/Login';

import {
  // blackBG,
  // greyDark,
  // greyMedium,
  // greyMediumDark,
  // tabHeight,
  // white,
  // yellow,
} from '../../variables/style-sheet';

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
      // style: {
      //   height: tabHeight,
      // },
      tabStyle: {
        // paddingBottom: 35
      },
      // labelStyle: {
      //   paddingBottom: 31,
      //   fontSize: 15
      // },
      safeAreaInset: {
        bottom: 'never'
      },
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    // Signup: SignupScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppSwitch = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Auth: AuthStack,
    Tabs: TabNav
  },
  {
    initialRouteName: 'Loading'
  }
)

export default AppContainer = createAppContainer(AppSwitch);
