import React, { useState, useRef } from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { getStorage, ref, uploadBytes, getDownloadURL  } from 'firebase/storage';

import firebase from '../../FirebaseConfig';

import data from "../data/fruits.json"

const Camera = () => {
  const [image, setImage] = useState(null)
  const [uploading, setUploading] = useState(false) 
  const [imageUrlToServer, setImageUrlToServer] = useState("")
  const [output, setOutput] = useState("")
  const [outputObj, setObj] = useState({})
  // const cameraRef = useRef(null);

  // console.log(selectedImage)

  // const handleSubmit = () =>{
  //   const storageRef = ref(storage, 'image.jpg');
  //   uploadBytes(storageRef, selectedImage.uri).then((snapshot) => {
  //     console.log('Uploaded a blob or file!');
  //   });
  // }
 

  // const takePicture = async () => {
  //   if (cameraRef.current) {
  //     const photo = await cameraRef.current.takePictureAsync();
  //     setSelectedImage(photo);
  //     sendImageToServer(photo);
  //     console.log(photo)
  //   }
  // };



//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4,3],
//         quality: 1
//     });
//     const source = {uri: result.assets[0].uri}
//     console.log(source)
//     setImage(source)
// }; 

// const uploadImage = async () => {
//   setUploading(true)
//   const response = await fetch(image.uri)
//   const blob = await response.blob()
//   const filename = image.uri.substring(image.uri.lastIndexOf('/')+1)
//   var ref = firebase.storage().ref().child(filename).put(blob)

//   try {
//       await ref;
//       const downloadURL = await getDownloadURL(ref);
//       console.log(downloadURL)
//   } catch (e){
//       console.log(e)
//   }
//   setUploading(false)
//   // console.warn(ref)
//   Alert.alert(
//       'Photo uploaded!'
//   );
  
//   setImage(null);

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  const source = { uri: result.assets[0].uri };
  console.log(source);
  setImage(source);
};

const uploadImage = async () => {
  if (!image) {
    return; // No image selected
  }

  setUploading(true);

  const response = await fetch(image.uri);
  const blob = await response.blob();
  const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);

  const storageRef = ref(firebase.storage(), filename);

  try {
    await uploadBytes(storageRef, blob);
    console.log('Image uploaded to Firebase Storage');

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(storageRef);
    console.log(downloadURL)

    // Now, you can send the downloadURL to your Flask server
    sendImageUrlToServer(downloadURL);
    alert("Photo Uploaded Successfully!")
  } catch (error) {
    console.error('Error uploading image to Firebase Storage', error);
  }

  setUploading(false);
};

const sendImageUrlToServer = async (imageUrl) => {
  const apiUrl = 'http://192.168.237.202:5000/upload';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUrl }),
    });

    if (response.ok) {
      console.log('Image URL sent to Flask server successfully');
    } else {
      console.error('Failed to send image URL to Flask server');
    }
  } catch (error) {
    console.error('Error sending image URL to Flask server', error);
  }
}

const result = async () =>{
  const prediction = "http://192.168.237.202:5000/prediction"
  try{
  
        await fetch(prediction).then(response => response.json()).then(data=>setOutput(data["data"]))
        data.map((item)=>{
          // console.log(typeof output)
          var x = output[0].toUpperCase() +output.slice(1)
          
          if(item.data == x){
            setObj(item)
            alert("check")
            console.log(item)
          }
        })
    }catch(e){
      console.log(e)
    }
};

// console.log(outputObj.Calories, output[0].toUpperCase() +output.slice(1))



return (
    // <View style={styles.container}>
    //   <Camera style={styles.camera} ref={cameraRef} type={Camera.Constants.Type.back} />
    //   <TouchableOpacity onPress={takePicture} style={styles.button}>
    //     <Text style={styles.buttonText}>Take a Picture</Text>
    //   </TouchableOpacity>
    //   {selectedImage && (
    //     <Image source={{ uri: selectedImage.uri }} style={styles.image} />
    //   )}
    //   <TouchableOpacity onPress={handleSubmit}>
    //     <Text>SUbmit</Text>
    //   </TouchableOpacity>
    // </View>
    <SafeAreaView style={styles.container}>
  <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
    <Text style={styles.btnText} >Pick an Image</Text> 
  </TouchableOpacity> 
  <View style={styles.imageContainer}>
   {image && <Image source={{uri: image.uri}} style={{width: 300, height: 300}}/>} 
  <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
      <Text style={styles.btnText}>Upload Image</Text> 
  </TouchableOpacity> 
  </View> 
  {/* <Text>Make Sure Size of the Image is Small</Text> */}
  <TouchableOpacity style={styles.checkCalories} onPress={result}><Text style={{color: "white"}}>Check Calories</Text></TouchableOpacity>
  <View style={{marginTop: "5%", backgroundColor: "black", padding: "5%", borderRadius: 10}}>
    <View style={{color: "white", justifyContent: "space-around"}}>
              <Text style={{color: "white"}}>Calories: {outputObj.Calories}</Text>
              <Text style={{color: "white"}}>Carbohydrates: {outputObj.Carbohydrates}</Text>
              <Text style={{color: "white"}}>Protiens: {outputObj.Protiens}</Text>
              <Text style={{color: "white"}}>Fats: {outputObj.Fats}</Text>
              <Text style={{color: "white"}}>Fibre: {outputObj.Fibre}</Text>
            </View>
            </View>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: "20%",
    // flexDirection: "row",
    justifyContent: "center"
  },
  camera: {
    width: '100%',
    height: '70%',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 100,
  },
  selectButton:{
    alignItems: "center",
    marginTop: '7%',
    backgroundColor: "#0057da",
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 7,
    paddingHorizontal: "5%",
    // marginLeft: "7%",
    marginBottom: "10%"
  },
  btnText:{
    color: "white"
  },
  uploadButton:{
    alignItems: "center",
    marginTop: '15%',
    backgroundColor: "green",
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 7,
    paddingHorizontal: "5%",
    marginLeft: "1%"

  },
  checkCalories:{
    alignItems: "center",
    marginTop: '20%',
    backgroundColor: "rgb(234, 66, 53)",
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 7,
    paddingHorizontal: "5%",
    marginLeft: "1%"
  }
});

export default Camera;
