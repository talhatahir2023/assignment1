import { Dimensions, View, Text, StyleSheet,Image,TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import ImagePicker from 'react-native-image-picker'
import { Icon } from 'react-native-elements'

const GMC1 = require('../assets/gmc.jpg')
const GMC2 = require('../assets/gmc2.jpg')
const GMC3 = require('../assets/gmc3.jpg')
const GMC4 = require('../assets/gmc4.jpeg')
const GMC5 = require('../assets/gmc5.jpg')
const UploadIcon = require('../assets/upload.png')

const {height, width} = Dimensions.get('window')

const HomeScreen = () => {
    const upload = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
          }).then(image => {
            console.log(image);
          }).catch(err => console.log(err))
    }
    const [image, setImage] = useState(null);
    
//     const options = {
//     title: 'Select Image',
//     mediaType: 'photo',
//     storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
//     };
    
    const handleImageUpload = () => {
    
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source.uri);
      }
    });
  };
   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            
      <Text style={styles.selectTxt}>Select/add your car</Text>
                
            </View>
      <View style={styles.row}>
        <Image style={styles.image} source={GMC1} />
        <Image style={styles.image} source={GMC2} />
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={GMC3} />
        <Image style={styles.image} source={GMC4} />
      </View>
            <View style={styles.row}>
                <Image style={styles.image} source={GMC5} />
                {/* <Button title='upload image' onPress={upload} color='tomato' /> */}
                <TouchableOpacity onPress={upload}>
               <View style={styles.uploadBox}>
               <Image
              style={styles.uploadIcon}
              source={UploadIcon}
            />
          </View>
        </TouchableOpacity>
      {/* {image ? (
        <Image style={styles.imagePreview} source={{ uri: image }} />
      ) : (
        <TouchableOpacity onPress={handleImageUpload}>
          <View style={styles.uploadBox}>
            <Image
              style={styles.uploadIcon}
              source={UploadIcon}
            />
          </View>
        </TouchableOpacity>
      )} */}
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 150,
      height: 150,
      margin: 10,
    },
    uploadBox: {
        borderWidth: 2,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 10,
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
      },
      uploadIcon: {
        width: 50,
        height: 50,
      },
      imagePreview: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    selectTxt: {
        color: 'white',
        fontWeight: '700',

    },
    header: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ccc',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    },
    
  });