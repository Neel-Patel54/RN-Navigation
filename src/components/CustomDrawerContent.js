import {
  DrawerContentScrollView,
  //DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';

export const CustomDrawerContent = props => {
  const navigation = useNavigation();

  const handleResetActiveRoute = screenName => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: screenName}],
      }),
    );
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Home"
        style={{marginHorizontal: 0, backgroundColor: 'pink'}}
        onPress={() => handleResetActiveRoute('HomeTab')}
      />
      <TouchableOpacity
        style={{
          height: 48,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          paddingLeft: 10,
        }}
        onPress={() => handleResetActiveRoute('HomeTab')}>
        <Text style={{color: 'black'}}>custom</Text>
      </TouchableOpacity>
      <DrawerItem
        label="User"
        style={{backgroundColor: 'orange'}}
        onPress={() => handleResetActiveRoute('UserTab')}
      />
    </DrawerContentScrollView>
  );
};
