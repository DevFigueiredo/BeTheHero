import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

import styles from './style';


import * as MailComposer from 'expo-mail-composer';

export default function Detail() {

  const navigation = useNavigation();
  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Animal Machucado" com o valor de R$120,00. ';
  function navigateBack(){
   navigation.goBack();
  }

  function sendMail(){
   MailComposer.composeAsync({
   subject: 'Heroi do Caso: Animal machucado',
   recipients: ['danielmirandacanal@gmail.com'],
   body: message

   });
  }

  function sendWhatsapp(){
   Linking.openURL(`whatsapp://send?phone=5512981948265&text=${message}`)
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={logoImg}/>
      <TouchableOpacity onPress={navigateBack}>
        <Feather name="arrow-left" size={20} color="#e82041" />
      </TouchableOpacity>
      </View>

      <View style={styles.Incident}>

<Text style={styles.incidentPropety}> ONG: </Text>
<Text style={styles.incidentValue}> APAD </Text>

<Text style={styles.incidentPropety}> CASO: </Text>
<Text style={styles.incidentValue}> Animal machucado </Text>

<Text style={styles.incidentPropety}> VALOR: </Text>
<Text style={styles.incidentValue}> R$ 120,00 </Text>


</View>


<View style={styles.contentBox}>


<Text style={styles.contentBoxText}> Salve o dia! </Text>
<Text style={styles.contentBoxText}> Seja herói desse caso. </Text>
<Text style={styles.contentDescription}> Entre em contato:  </Text>
<View style={styles.actions}>
  <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
    <Text style={styles.actionText}>Whatsapp</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.action} onPress={sendMail}>
    <Text style={styles.actionText}>E-mail</Text>
  </TouchableOpacity>
  
  </View>
</View>

      </View>
  );
}