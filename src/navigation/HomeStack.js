import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screen/Home';
import About from '../screen/About';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Setting from '../screen/Setting';
import Payment from '../screen/Payment';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: 'pink'}, // Set the background color here
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={24}
              color="#000"
              style={{marginLeft: 0}}
              onPress={() => {
                navigation.openDrawer(); // Open the drawer
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={24}
              color="#000"
              style={{marginLeft: 0}}
              onPress={() => {
                navigation.openDrawer(); // Open the drawer
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={24}
              color="#000"
              style={{marginLeft: 0}}
              onPress={() => {
                navigation.openDrawer(); // Open the drawer
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={24}
              color="#000"
              style={{marginLeft: 0}}
              onPress={() => {
                navigation.openDrawer(); // Open the drawer
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
