import React, {useLayoutEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { CITIES } from '../data/dummyData';
import CityTile from '../components/cityTile';


export default AirGeneral = ({navigation}) => {
  
    const cities = CITIES;

    const clickHandler = id => {
        navigation.navigate("AirCity", {itemId: id});
      };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Air Condition",
            headerRight: () => (<Button type='clear' icon={<Ionicons name='ios-add' size={32} color="#0068d3"/>}
            onPress={() => navigation.navigate("AddCity")}/>)
        });
    }, [navigation]);

    return (
    <View style={styles.container}>
        <FlatList
            data={cities}
            renderItem={(itemData) => { return <CityTile text={itemData.item.name} onClick={clickHandler}id={itemData.item.id}/>}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto-BlackItalic',
    }
  });