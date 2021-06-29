import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import DefaultStyle from '../constants/Color';

export default StartScreen = ({ navigation }) => {

  const pressHandler = props => {
    navigation.replace("generalScreen");
  };

  return (

    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Logo.png')}
      />
      <Button style={styles.button} type='clear' icon={<Ionicons name='arrow-forward' size={DefaultStyle.size} color={DefaultStyle.primary} />}
        onPress={pressHandler} />
      <Image
        style={styles.wave}
        source={require('../assets/wave.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  logo: {
    marginTop: 70,
    resizeMode: 'contain',
  },
  wave: {

    resizeMode: 'contain',


  }
});