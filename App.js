import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FF0000" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
