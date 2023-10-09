import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';


export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      
        <Text style={{fontSize: 50, fontWeight: "700"}}>Nutri<Text style={{color: "green"}}>+</Text></Text>
        <Image style={{width: "50%", height: "30%"}} source={require("../../assets/1st.jpg")}/>
        <View style={{flex:1 }}>
        <View style={styles.email}>
                {/* <Text style={{fontSize: 25}}>Email: </Text> */}
                <Image style={{height: 20, width: 20, position: "absolute"}} source={require("../../assets/profile.png")} />
                <TextInput className="pt-5" style={styles.emailField} placeholder='Email'  />
            </View>
            <View style={styles.pass}>
                {/* <Text style={{fontSize: 25}}>Password: </Text> */}
                <Image style={{height: 20, width: 20, position: "absolute"}} source={require("../../assets/password.png")} />
                <TextInput secureTextEntry={true}  style={styles.passwordField} placeholder='Password' />
            </View>
            <TouchableOpacity style={styles.btn} title='Submit' onPress={()=> navigation.navigate('Next')} >
              <Text style={{color: "white", fontWeight: "500", fontSize: 17}}>Submit</Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 20, fontWeight:"700" }}>New User? <Text style={{color: "green", fontWeight: '700'}}>Sign Up</Text></Text>
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
  email:{
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: "30%"
},
pass:{
    flexDirection: 'row'
},
emailField:{
    borderBottomColor: 'black',
    paddingVertical: 5,
    paddingRight: "40%",
    paddingLeft: "7%",
    // marginLeft: 70,
    borderWidth: 1,
    // borderRadius:10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0

},
passwordField:{
    borderWidth: 1,
    paddingVertical: 5,

    borderRadius: 10,
    paddingRight: "35%",
    paddingLeft: "7%",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0
},
btn:{
  alignItems: "center",
  marginTop: '7%',
  backgroundColor: "green",
  paddingTop: 8,
  paddingBottom: 8,
  borderRadius: 7,
}
});
