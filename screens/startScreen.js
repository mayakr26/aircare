import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button } from 'react-native-elements';

export default StartScreen = ({navigation}) => {
  
  const pressHandler = props => {
    navigation.navigate("tempGeneral");  
  };
  
  return (
    <View style={styles.container}>
      <Text>Start Screen here!</Text>
      <Button style={styles.button} type='clear' icon={<Ionicons name='ios-arrow-forward-sharp' size={32} color="rgb(0,122,255)"/>}
      onPress={pressHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    
  }
});