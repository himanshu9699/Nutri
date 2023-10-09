import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';


export default function SecondScreen({navigation}) {
  return (
    <View style={styles.container}>
      
        <Text style={{fontSize: 50, fontWeight: "700"}}>Check<Text style={{color: "green"}}> Calories.</Text></Text>
        <View style={{flexDirection: "row"}}>
            <TouchableOpacity style={styles.btn} title='Submit' onPress={()=> navigation.navigate("Camera")} >
              <Text style={{color: "white", fontWeight: "500", fontSize: 17}}>IMAGE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn1} title='Submit' onPress={()=> navigation.navigate("Text")}>
              <Text style={{color: "white", fontWeight: "500", fontSize: 17}}>TEXT</Text>
              </TouchableOpacity>
            </View>
            
      <StatusBar style="auto" />
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
    paddingVertical: "20%"
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
}
});
