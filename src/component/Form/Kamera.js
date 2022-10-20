import { StyleSheet, Text, Button, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from "react";
import * as ImagePickerExpo from 'expo-image-picker';
import { Ionicons, FontAwesome } from "@expo/vector-icons"


const Kamera = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const openCameraWithPermission = async () => {
      let permissionResult = await ImagePickerExpo.requestCameraPermissionsAsync();

      if (permissionResult.granted === false) {
          Alert.alert("Camera Permission");
          return;
      }

      let cameraResult = await ImagePickerExpo.launchCameraAsync({
          // ...
      });
      console.log(cameraResult);

      if (cameraResult.cancelled === true) {
          return;
      }

      setSelectedImage({ localUri: cameraResult.uri });
  };

  return (
    <View style={styles.camera}>
<TouchableOpacity onPress={openCameraWithPermission} >
<FontAwesome name="camera" size={100} color="white" />
    <Text style={styles.buttonText}>KAMERA</Text>
    </TouchableOpacity>
    {(selectedImage !== null) 
    && 
    <Image
        source={{ 
          uri: selectedImage.localUri 
        }}
        style={styles.thumbnail}
    />}
    </View>
  )
}

export default Kamera

const styles = StyleSheet.create({
    thumbnail: {
    width: 50,
    height: 50,
},
camera:{
    height: 150,
    margin: 5,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'limegreen',
    alignItems: 'center',
    justifyContent: 'center'
},
buttonText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center'
}
})