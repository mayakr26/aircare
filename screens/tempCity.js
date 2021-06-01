import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import { CITIES } from '../data/dummyData';

export default TempCity = ({route, navigation}) => {
    
    const {itemId} = route.params;
    const selectedCity = CITIES.find(cit => cit.id === itemId);
    const cityName = selectedCity.name;

    useLayoutEffect(() => {
        navigation.setOptions({      
            headerTitle: cityName
          });
    }, [navigation]);


    return (
        <View style={styles.container}>
          <Text>City Temperatures here!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });