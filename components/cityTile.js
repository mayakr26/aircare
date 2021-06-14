import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'

export default GridTile = props => {

  let data1 = []
  let times = [1961, 1971, 1981, 1991, 2001, 2011, 2021]

  for(let i in props.temps) {
    data1.push({
      x: times[i],
      y: props.temps[i]
    })
  }

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => props.onClick(props.id)}
    >
      <Text style={styles.gridText}>{props.text}</Text>
      <Chart
        style={{ height: 120, width: '100%', marginTop: 20 }}
        xDomain={{ min: 1961, max: 2021 }}
        yDomain={{ min: -10, max: 40 }}
        padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
      >
        <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
        <HorizontalAxis tickCount={7} />
        <Line data={data1} smoothing="none" theme={{ stroke: { color: '#0068d3', width: 2 } }} />
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
    width: 340,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#0068d3",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  },
  gridText: {
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  }
});
