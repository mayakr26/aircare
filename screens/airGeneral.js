import React, { useLayoutEffect, useContext } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import CityTile from '../components/cityTile';
import { ToDoContext } from "../data/ToDoContext";
import DefaultStyle from "../constants/Color";
import { useColorScheme } from 'react-native-appearance';
import { getBackgroundColorTheme } from '../constants/Theme';

export default AirGeneral = ({navigation}) => {

    const [toDoData, setToDoData] = useContext(ToDoContext);

    const cities = toDoData.citiesair;

    const colorScheme = useColorScheme();

    const clickHandler = id => {
        navigation.navigate("AirCity", {itemId: id});
      };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Air Condition",
            headerRight: () => (<Button type='clear' icon={<Ionicons name='ios-add' size={DefaultStyle.size} color={DefaultStyle.primary}/>}
            onPress={() => navigation.navigate("AddCity")}/>)
        });
    }, [navigation]);

    return (
    <View style={styles.container, {backgroundColor: getBackgroundColorTheme(colorScheme === 'light')}}>
        <FlatList
            data={cities}
            renderItem={(itemData) => { return <CityTile text={itemData.item.name} temps={itemData.item.temps.summary} onClick={clickHandler}id={itemData.item.id} effect={'air'}/>}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });