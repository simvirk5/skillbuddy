import React from 'react'

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import Icon from '../components/Icon'

import CategoryScreen from '../screens/explore/CategoryScreen';
import ExploreScreen from '../screens/explore/ExploreScreen';
import HomeScreen from '../screens/home/HomeScreen';
import MessagesScreen from '../screens/messages/MessagesScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ThreadScreen from '../screens/messages/ThreadScreen';
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

const MessagesStack = createStackNavigator(
  {
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        header: null,
        headerBackTitle: null,
      },
    },
    Thread: ThreadScreen,
  },
  {
    initialRouteName: 'Messages',
  }
);


const TabNav = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Explore: ExploreStack,
    Messages: MessagesStack,
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        const icons = {
          Home: <Icon color={tintColor} library='Feather' name='search' size={27} />,
          Explore: <Icon color={tintColor} library='Feather' name='globe' size={27} />,
          Buddies: <Icon color={tintColor} library='FontAwesome' name='handshake-o' size={27} />,
          Messages: <Icon color={tintColor} library='MaterialCommunityIcons' name='message-text' size={27} />,
          Profile: <Icon color={tintColor} library='FontAwesome' name='smile-o' size={27} />,
        }
        return icons[routeName]
      }
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
        paddingTop: 5,
        justifyContent: 'space-between',
      },
      labelStyle: {
        marginBottom: 35,
        fontSize: 11,
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
