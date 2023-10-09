import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground,Pressable, SectionList, ScrollView, Modal } from 'react-native';
import data from "../data/data.json"
import fruits from "../data/fruits.json"
// import Login from './src/screens/Login';
export default function Result() {
  const [modalVisible, setModalVisible] = useState(false);
  const [clickedText, setClickedText] = useState('');
  const [fruitsObj, setObj] = useState({})

  const handleTextClick= (name) =>{
    setClickedText(name);
    // console.warn(item)

    fruits.map((item) =>{
      if(item.data == name){
        setObj(item)
      }
    })

    console.log(fruitsObj.Fruits)


    setModalVisible(true)
  }
  // console.warn(data)
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require("../../assets/bg.png")}
      style={{flex: 1, width:"100%"}}
       >


        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{color: "white", fontSize: 20, fontWeight: "700", padding: "5%"}}>{fruitsObj.data}</Text>
            <View style={{color: "white"}}>
              <Text style={{color: "white"}}>Calories: {fruitsObj.Calories}</Text>
              <Text style={{color: "white"}}>Carbohydrates: {fruitsObj.Carbohydrates}</Text>
              <Text style={{color: "white"}}>Protiens: {fruitsObj.Protiens}</Text>
              <Text style={{color: "white"}}>Fats: {fruitsObj.Fats}</Text>
              <Text style={{color: "white"}}>Fibre: {fruitsObj.Fibre}</Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{padding: "5%", fontWeight: "800", fontSize: 17, color: "white", paddingTop: "10%"}}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


        <View style={styles.SectionList}>
          <Text style={{fontSize: 30, fontWeight: "700", color: "white", marginBottom: "5%", borderBottomWidth: 1, width: "100%", textAlign: "center", borderTopWidth: 0, paddingTop: "10%"}}>Click on Item To know the Calories</Text>
          <SectionList
          sections={data}
          renderItem={(({item})=> <TouchableOpacity  onPress={() => handleTextClick(item)} >
            <Text style={{fontSize: 20, color:"white", width: "100%", paddingVertical: "2%"}} >{item}</Text> 
            {/* <Text style={{fontSize: 20, color:"white", width: "100%", paddingVertical: "2%"}}>{item}</Text> */}
            </TouchableOpacity>)}
          renderSectionHeader={(({section})=> <Text style={{fontSize: 30, color: "white", fontWeight: "700", paddingBottom:"5%", paddingTop: "20%"}}>{section.title}</Text>)}
          style={{backgroundColor:"black", paddingVertical:"10%", paddingRight:"20%", borderRadius: 10, opacity: "0.7", paddingLeft: "10%", maxHeight: "80%" }}
           />
         
        </View>

        <View  style={styles.btns}>

        </View>
       </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: "30%",
    height: "100%",
    // paddingVertical: "20%",
    // backgroundImage: 'linear-gradient(45deg, green, #0000ff)',
    // width: '100px'
  },
btn:{
  alignItems: "center",
  marginTop: '7%',
  backgroundColor: "green",
  paddingTop: 8,
  paddingBottom: 8,
  borderRadius: 7,
  paddingHorizontal: "5%",
  marginRight: "7%"
},
btn1:{
  alignItems: "center",
  marginTop: '7%',
  backgroundColor: "#0057da",
  paddingTop: 8,
  paddingBottom: 8,
  borderRadius: 7,
  paddingHorizontal: "5%",
  marginLeft: "7%"
},
SectionList:{
  justifyContent: "center",
  alignItems: "center",
  marginTop:"5%",
  // backgroundColor: "black",
  // opacity: "0.5"

},
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
},
modalView: {
  margin: 20,
  backgroundColor: 'hsla(0, 100%, 90%, 0.3)',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  opacity: 1,

},
});
