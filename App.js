
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './components/Routes/Routes'

function App() {
  return (
    <Routes/>
  );
}

export default App;