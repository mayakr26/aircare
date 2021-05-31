import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button } from 'react-native-elements';

export default AirGeneral = ({navigation}) => {
  
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Air Condition",
            headerRight: () => (<Button type='clear' icon={<Ionicons name='ios-add' size={32} color="blue"/>}
            onPress={() => navigation.navigate("AddCity")}/>)
        });
    }, [navigation]);

    return (
    <View style={styles.container}>
      <Text>Air General here!</Text>
      
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