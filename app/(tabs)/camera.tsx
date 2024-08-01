import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {User,onAuthStateChanged} from 'firebase/auth';
import {ref,uploadBytes} from 'firebase/storage';
import { storage } from '@/FirebaseConfig'

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

const uploadImage=async()=>{
  try{
    const response = await fetch(image);
    const blob = await response.blob();

    const storageRef = ref(storage, `images/${Date.now()}`)
    await uploadBytes(storageRef, blob);

    console.log('image Uploaded successefull')
}catch(error){
    console.log('Error uploading image : '+error.message);

}


  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <Button title='upload' onPress={uploadImage}   />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
