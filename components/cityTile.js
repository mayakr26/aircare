import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default GridTile = props => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => props.onClick(props.id)}
    >
      <Text style={styles.gridText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 15,
    padding: 20,
    height: 120,
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
      fontSize: 20,
      fontWeight: '300',
      textAlign: 'center'
  }
});
