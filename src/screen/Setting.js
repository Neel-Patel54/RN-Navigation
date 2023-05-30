import React, {useState} from 'react';
import {View, Text, Switch, RefreshControl, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

const Setting = ({navigation}) => {
  const SECTIONS = [
    {
      title: 'First',
      content: 'Lorem ipsum...',
    },
    {
      title: 'Second',
      content: 'Lorem ipsum...',
    },
  ];

  const [activeSections, setActiveSections] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  console.log({refreshing});
  //   _renderSectionTitle = section => {
  //     return (
  //       <View style={{}}>
  //         <Text style={{color: 'black'}}>{section.content}</Text>
  //       </View>
  //     );
  //   };

  const renderHeader = section => {
    return (
      <View
        style={{
          width: '100%',
          padding: 4,
          backgroundColor: 'white',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{color: 'black'}}>{section.title}</Text>
        <Text style={{color: 'black'}}>Down</Text>
      </View>
    );
  };

  const renderContent = section => {
    return (
      <View style={{}}>
        <Text style={{color: 'black'}}>{section.content}</Text>
      </View>
    );
  };

  const updateSections = activeIndex => {
    setActiveSections(activeIndex);
  };

  return (
    <View style={{flex: 1}}>
      <Text>Setting</Text>
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        expandMultiple
        // renderSectionTitle={_renderSectionTitle}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
        underlayColor={'blue'}
      />
      <Switch
        trackColor={{false: 'gray', true: 'blue'}}
        thumbColor={isEnabled ? 'red' : 'black'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled(!isEnabled)}
        value={isEnabled}
      />
      <ScrollView
        contentContainerStyle={{}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={{color: 'black'}}>
          Pull down to see RefreshControl indicator
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Payment')}
          style={styles.btn}>
          <Text style={styles.txt}>Go to Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    width: '100%',
    maxHeight: '50%',
    marginVertical: 15,
  },
  gridSubContainer: {
    width: '80%',
    maxHeight: '100%',
    alignSelf: 'center',
    borderWidth: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 30,
    padding: 10,
    height: 60,
    width: 60,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  txt: {
    color: 'black',
  },
  btn: {
    width: '50%',
    backgroundColor: 'pink',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});