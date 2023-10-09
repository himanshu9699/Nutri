import * as React from 'react';
import { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Screens
import Login from './src/screens/Login';
import SecondScreen from './src/screens/SecondScreen';
import Result from './src/screens/Result';
import  Camera  from './src/screens/camera';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
     initialRouteName='Login'
     >
      <Stack.Screen
      name='Login'
      component={Login}
      options={{headerShown: false}}
      />
      <Stack.Screen 
      name='Next' 
      component={SecondScreen}
      options={{headerShown: false}}
        
        />
        <Stack.Screen
        name="Camera"
        component={Camera}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Text'
        component={Result}
        options={{headerShown: false}}
         />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

