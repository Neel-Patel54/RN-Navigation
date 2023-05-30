import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

const About = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [item, setItem] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const data = ['data1', 'data2', 'item1', 'Item2'];

  const handleSearch = () => {
    const newArray = data.filter(list => {
      return list.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
    setItem(newArray);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 24,
          marginBottom: 10,
        }}>
        About
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Setting')}
        style={styles.btn}>
        <Text style={styles.txt}>Go to Setting</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              width: '70%',
              height: '20%',
              borderRadius: 10,
            }}>
            <Text style={{color: 'black'}}>Hello!</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
      <TextInput
        value={searchText}
        onChangeText={txt => setSearchText(txt)}
        style={{
          width: '80%',
          height: 40,
          alignSelf: 'center',
          borderWidth: 1,
          color: 'black',
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          width: '34%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={{color: 'black'}} onPress={handleSearch}>
          search
        </Text>
      </TouchableOpacity>
      <View style={{maxHeight: '20%', marginBottom: 10}}>
        <FlatList
          data={item.length == 0 ? data : item}
          renderItem={({item}) => (
            <Text
              style={{
                color: 'black',
                backgroundColor: 'yellow',
                paddingVertical: 10,
                marginVertical: 5,
                paddingHorizontal: 50,
              }}>
              {item}
            </Text>
          )}
        />
      </View>
      <Button title="Show modal" onPress={toggleModal} />
    </View>
  );
};

export default About;


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


// multiple image upload at a time with same API : This Flow use "recursion" funcation => We can also use this for permission: 

// import React, { useState } from 'react';
// import { View, Image, Button } from 'react-native';

// const MyComponent = () => {
//   const [imageUrls, setImageUrls] = useState([]);

//   const handleImageUpload = async () => {
//     try {
//       await uploadImage(0);
//     } catch (error) {
//       console.log('Error uploading images:', error);
//     }
//   };

//   const uploadImage = async (index) => {
//     if (index >= imageUrls.length) {
//       console.log('All images uploaded successfully');
//       return;
//     }

//     const imageUrl = imageUrls[index];

//     // Create a new FormData object
//     const formData = new FormData();
//     formData.append('image', imageUrl);

//     try {
//       // Make the API request
//       const response = await fetch('https://example.com/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       // Handle the response from the server
//       console.log('Image uploaded successfully', data);

//       // Upload the next image
//       await uploadImage(index + 1);
//     } catch (error) {
//       console.log('Error uploading image:', error);
//     }
//   };

//   return (
//     <View>
//       {imageUrls.map((imageUrl, index) => (
//         <Image key={index} source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
//       ))}
//       <Button title="Upload Images" onPress={handleImageUpload} />
//     </View>
//   );
// };

// export default MyComponent;

