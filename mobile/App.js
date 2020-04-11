import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/pages/Home';
import Incidents from './src/pages/Incidents';
import Detail from './src/pages/Detail';
 const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
    <AppStack.Navigator screenOptions={{headerShown: false}}>
    
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Incidents" component={Incidents} />
    <AppStack.Screen name="Detail" component={Detail} />
    
    </AppStack.Navigator>
    </NavigationContainer>
    
  );
}
