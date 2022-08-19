
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import UnitConvertor from '../Screens/UnitConvertor'
import History from '../Screens/History';

// We have 3 routes "HomeScreen" || "UnitConvertor" || "History"
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={HomeScreen} />
        <Stack.Screen name="UnitConvertor" component={UnitConvertor} />
        <Stack.Screen name="History" component={History} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes