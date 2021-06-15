import React, {useLayoutEffect, useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import { ToDoContext } from '../data/ToDoContext';

export default AirCity = ({route, navigation}) => {
  
    const {itemId} = route.params;

    const [toDoData, setToDoData] = useContext(ToDoContext);
    const selectedCity = toDoData.cities.find(cit => cit.id === itemId);
    const cityName = selectedCity.name;

    useLayoutEffect(() => {
        navigation.setOptions({      
            headerTitle: cityName
          });
    }, [navigation]);


    return (
        <View style={styles.container}>
          <Text>City Air Condition here!</Text>
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