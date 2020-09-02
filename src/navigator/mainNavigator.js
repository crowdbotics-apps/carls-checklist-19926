import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile96267Navigator from '../features/UserProfile96267/navigator';
import Tutorial96266Navigator from '../features/Tutorial96266/navigator';
import NotificationList96238Navigator from '../features/NotificationList96238/navigator';
import Settings96237Navigator from '../features/Settings96237/navigator';
import Settings96229Navigator from '../features/Settings96229/navigator';
import UserProfile96227Navigator from '../features/UserProfile96227/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile96267: { screen: UserProfile96267Navigator },
Tutorial96266: { screen: Tutorial96266Navigator },
NotificationList96238: { screen: NotificationList96238Navigator },
Settings96237: { screen: Settings96237Navigator },
Settings96229: { screen: Settings96229Navigator },
UserProfile96227: { screen: UserProfile96227Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
