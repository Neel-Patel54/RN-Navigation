import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import User from '../screen/User';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, CommonActions} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const UserTab = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="User"
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: 'pink',
        },
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={24}
            color="#000"
            style={{marginLeft: 16}}
            onPress={() => {
              navigation.openDrawer(); // Open the drawer
            }}
          />
        ),
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'account-outline' : 'account-outline';
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={24}
              color={focused ? '#000' : '#999'}
            />
          );
        },
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'HomeTab'}],
                  }),
                );
              }} // Call the handleTabPress function
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          headerStyle: {
            backgroundColor: 'pink', // Set the desired header background color
          },
          tabBarButton: props => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'UserTab'}],
                  }),
                );
              }} // Call the handleTabPress function
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserTab;
