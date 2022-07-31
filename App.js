import HotelList from './src/screens/HotelList';
import HotelDetails from './src/screens/HotelDetails';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName="HotelList">
      <Stack.Screen name="HotelList" component={HotelList} options={{ headerShown:false }} />
      <Stack.Screen name="HotelDetails" component={HotelDetails} options={{ headerShown:false }} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default App;