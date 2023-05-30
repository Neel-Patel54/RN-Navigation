/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {FlatGrid} from 'react-native-super-grid';

const Home = ({navigation}) => {
  const [items, setItems] = React.useState([
    {name: 'TURQUOISE', code: '#1abc9c'},
    {name: 'EMERALD', code: '#2ecc71'},
    {name: 'PETER RIVER', code: '#3498db'},
    {name: 'AMETHYST', code: '#9b59b6'},
    {name: 'WET ASPHALT', code: '#34495e'},
    {name: 'GREEN SEA', code: '#16a085'},
    {name: 'NEPHRITIS', code: '#27ae60'},
    {name: 'BELIZE HOLE', code: '#2980b9'},
    {name: 'WISTERIA', code: '#8e44ad'},
    {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
    {name: 'SUN FLOWER', code: '#f1c40f'},
    {name: 'CARROT', code: '#e67e22'},
    {name: 'ALIZARIN', code: '#e74c3c'},
    {name: 'CLOUDS', code: '#ecf022'},
    {name: 'CONCRETE', code: '#95a5a6'},
    {name: 'ORANGE', code: '#f39c12'},
    {name: 'PUMPKIN', code: '#d35400'},
    {name: 'POMEGRANATE', code: '#c0392b'},
    {name: 'SILVER', code: '#bdc3c7'},
    {name: 'ASBESTOS', code: '#7f8c8d'},
  ]);

  const updateHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: `click`, // Set the updated title
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Home</Text>
      <View style={styles.gridContainer}>
        <View style={styles.gridSubContainer}>
          <FlatGrid
            itemDimension={60}
            data={items}
            maxItemsPerRow={3}
            fixed
            spacing={10}
            renderItem={({item}) => (
              <View
                style={[styles.itemContainer, {backgroundColor: item.code}]}>
                <Text style={styles.itemName}>{item.name}</Text>
                {/* <Text style={styles.itemCode}>{item.code}</Text> */}
              </View>
            )}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('About')}
        style={styles.btn}>
        <Text style={styles.txt}>Go to About</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => updateHeaderTitle()} style={styles.btn}>
        <Text style={styles.txt}>Change title</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
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
    // borderWidth: 1,
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
    // width: 60,
  },
  itemName: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
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
