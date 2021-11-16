import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from '../Screens/Homepage';
import DetailPage from '../Screens/DetailPage';
import LoginPage from '../Screens/LoginPage';

const Stack = createNativeStackNavigator();

export default function NavigationPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({title: ''}, {headerShown: false})}
          name="LoginPage"
          component={LoginPage}
        />
        <Stack.Screen
          options={{title: 'Simpsonlar'}}
          name="Home"
          component={Homepage}
        />
        <Stack.Screen name="Details" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
