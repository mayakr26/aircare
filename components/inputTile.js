import React, {useState} from "react";
import { Button } from "react-native-elements";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput} from "react-native";

export default InputTile = (props) => {

    const [currentInput, setCurrentInput] = useState("");

    const changeTextHandler = (text) => {
        setCurrentInput(text);
    }

    const deleteHandler = () => {
        setCurrentInput('');
    }

    return (
        <View style={styles.itemContainer}>
            <Ionicons name={'checkmark-circle-outline'} size={30} color={'#017AFF'} style={{position:'absolute', left: 15, top: 25}} onPress={() => {props.onAdd(currentInput)}}></Ionicons>
            <TextInput placeholder="Add New City Here" style={styles.title} onChangeText={changeTextHandler} value={currentInput}/>
            <Ionicons name={'close-circle-outline'} size={30} color={'#017AFF'} style={{position:'absolute', right: 15, top: 25}} onPress={() => {deleteHandler}}></Ionicons>
        </View>
    );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    padding: 10,
    height: 80,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  },
  item: {
      flex: 1
  }
});