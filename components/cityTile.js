import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart';
import DefaultStyle from '../constants/Color';
import {getColorTheme, getTileBackgroundColorTheme, getTextColorTheme} from '../constants/Theme';
import { useColorScheme } from 'react-native-appearance';
import { useDimensions } from '@react-native-community/hooks';

export default GridTile = props => {

  let data1 = []
  let times = [1961, 1971, 1981, 1991, 2001, 2011, 2021]

  const { height } = useDimensions().window;

  for(let i in props.temps) {
    data1.push({
      x: times[i],
      y: props.temps[i]
    })
  }

  let minyDomain = 0;
  let maxyDomain = 0;
  let valuesverticalaxis = [];
  if (props.effect == 'air'){
    minyDomain = 10;
    maxyDomain = 170;
    valuesverticalaxis = [10, 30, 50, 70, 90, 110, 130, 150, 170]
  } else if (props.effect == 'temps'){
    minyDomain = 5;
    maxyDomain = 20;
    valuesverticalaxis = [5, 10, 15, 20]
  }

  const colorScheme = useColorScheme();


  return (
    <TouchableOpacity
      style={[{backgroundColor: getTileBackgroundColorTheme(colorScheme === 'light')}, height > 650 ? {...styles.itemContainer} : {...styles.itemContainerHorizontal}]}
      onPress={() => props.onClick(props.id)}
    >
      <Text style={styles.gridText, {color: getTextColorTheme(colorScheme === 'light')}}>{props.text}</Text>
      <Chart
        style={{ height: 120, width: '100%', marginTop: 20 }}
        xDomain={{ min: 1961, max: 2021 }}
        yDomain={{ min: minyDomain, max: maxyDomain }}
        padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
      >
        <VerticalAxis tickValues={valuesverticalaxis} theme={{ labels: { label: { color: getTextColorTheme(colorScheme === 'light')}}}} />
        <HorizontalAxis tickCount={7} theme={{ labels: { label: { color: getTextColorTheme(colorScheme === 'light')}}}}/>
        <Line data={data1} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === "light"), width: 2 } }} />
      </Chart>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 15,
    padding: 20,
    height: 220,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 20,
    shadowColor: DefaultStyle.black,
    shadowOpacity: 0.20,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  },
  itemContainerHorizontal: {
    flex: 1,
    margin: 15,
    marginLeft: 100,
    marginRight: 100,
    padding: 20,
    height: 200,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 20,
    shadowColor: DefaultStyle.black,
    shadowOpacity: 0.20,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  },
  gridText: {
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: DefaultStyle.font,
  }
});
