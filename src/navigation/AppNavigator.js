/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTab from './HomeTab';
import UserTab from './UserTab';
import { CustomDrawerContent } from '../components/CustomDrawerContent';
import {useNavigation, CommonActions} from '@react-navigation/native';


const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerItemStyle: {marginHorizontal: 0},
      }}>
      <Drawer.Screen
        name="HomeTab"
        component={HomeTab}
        // options={{
        // headerShown: false,
        // }}
        options={({}) => ({
          headerShown: false,
        })}
      />
      <Drawer.Screen
        name="UserTab"
        component={UserTab}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
