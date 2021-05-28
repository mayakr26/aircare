import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default TempGeneral = ({navigation}) => {
  
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: null
          });
    }, [navigation]);

    return (
    <View style={styles.container}>
      <Text>Temperatures General here!</Text>
      
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
});