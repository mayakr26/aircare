import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LineChart } from 'react-native-chart-kit';

export default GridTile = props => {

  const linedata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2, // optional
      },
    ],
  };
  function* yLabel() {
    yield* ['-10','0', '10', '20', '30', '40'];
  }
  const yLabelIterator = yLabel();

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => props.onClick(props.id)}
    >
      <Text style={styles.gridText}>{props.text}</Text>
      <LineChart
        data={linedata}
        width={340}
        height={100}
        formatYLabel={() => yLabelIterator.next().value}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16          
          }
        }}
        bezier
        style={{
          flex: 1,
          marginVertical: 20,
          marginLeft: -20,
        }}
      />
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
