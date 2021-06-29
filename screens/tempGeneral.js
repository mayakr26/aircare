import React, { useLayoutEffect, useState, useContext } from 'react';
import { StyleSheet, Modal, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import CityTile from "../components/cityTile";
import { ToDoContext } from '../data/ToDoContext';
import DefaultStyle from '../constants/Color';
import { useColorScheme } from 'react-native-appearance';
import { getColorTheme, getBackgroundColorTheme, getHeaderBackgroundColorTheme } from '../constants/Theme';
import { useDimensions } from '@react-native-community/hooks';


export default TempGeneral = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(true);

  const [toDoData, setToDoData] = useContext(ToDoContext);

  const cities = toDoData.citiestemp;

  const colorScheme = useColorScheme();

  const { height } = useDimensions().window;

  const clickHandler = id => {
    navigation.navigate("TempCity", { itemId: id });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { height: 100, backgroundColor: getHeaderBackgroundColorTheme(colorScheme === 'light') },
      headerTitle: "Temperature",
      headerRight: () => (<Button type='clear' icon={<Ionicons name='ios-add' size={DefaultStyle.size} color={getColorTheme(colorScheme === 'light')} />}
        onPress={() => navigation.navigate("AddCity")} />)
    });
  }, [navigation]);


  return (
    <View style={height > 650 ? styles.container : styles.containerHorizontal, { backgroundColor: getBackgroundColorTheme(colorScheme === 'light') }}>
      <FlatList
        data={cities}
        renderItem={(itemData) => { return <CityTile text={itemData.item.name} temps={itemData.item.temps.summary} onClick={clickHandler} id={itemData.item.id} effect={'temps'} /> }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    marginLeft: 10,
    flex: 1,
  },

});