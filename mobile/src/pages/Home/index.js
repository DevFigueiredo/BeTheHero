import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home( {navigation} ) {
  return (
    <View>
      <Text>Bem vindo a Home</Text>
      <Button title="Incidentes" onPress={ ()=> navigation.navigate('Incidents') } />
      </View>
  );
}