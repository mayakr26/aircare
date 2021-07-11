import React, { useLayoutEffect, useState, useContext } from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import CityTile from "../components/cityTile";
import { CityContext } from '../data/CityContext';
import DefaultStyle from '../constants/Color';
import { useColorScheme } from 'react-native-appearance';
import { getColorTheme, getBackgroundColorTheme, getHeaderBackgroundColorTheme } from '../constants/Theme';
import { useDimensions } from '@react-native-community/hooks';


export default TempGeneral = ({ navigation }) => {


  const [cityData, setCityData] = useContext(CityContext);

  const cities = cityData.citiestemp;

  const colorScheme = useColorScheme();

  const { height } = useDimensions().window;

  const clickHandler = id => {
    navigation.navigate("TempCity", { itemId: id });
  };

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { height: 100, backgroundColor: getHeaderBackgroundColorTheme(colorScheme === 'light') },
      headerTitle: "Temperature",
      headerRight: () => (<Button type='clear' icon={<Ionicons name='ios-add' size={DefaultStyle.size} color={getColorTheme(colorScheme === 'light')} />}
        onPress={() => navigation.navigate("AddCity")} />)
    });

    Dimensions.addEventListener('change', () => {
      navigation.setOptions({
        headerStyle: { height: isPortrait() ? 100 : 60, backgroundColor: getHeaderBackgroundColorTheme(colorScheme === 'light') }
      });
    });
  }, [navigation]);


  return (
    <View style={{ backgroundColor: getBackgroundColorTheme(colorScheme === 'light') }}
    >
      <FlatList
        data={cities}
        contentContainerStyle={height > 650 ? { ...styles.container, backgroundColor: getBackgroundColorTheme(colorScheme === 'light'), justifyContent: 'center' } : { ...styles.containerHorizontal, backgroundColor: getBackgroundColorTheme(colorScheme === 'light'), justifyContent: 'center' }}
        renderItem={(itemData) => { return <CityTile text={itemData.item.name} temps={itemData.item.temps.summary} onClick={clickHandler} id={itemData.item.id} effect={'temps'} /> }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  containerHorizontal: {
    flexDirection: "column",
    justifyContent: 'center',
  },

});