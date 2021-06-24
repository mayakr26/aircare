import React, {useState} from "react";
import { Button } from "react-native-elements";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput} from "react-native";
import DefaultStyle from '../constants/Color';

export default InputTile = (props) => {

    const [currentInput, setCurrentInput] = useState("");

    const changeTextHandler = (text) => {
        setCurrentInput(text);
    }

    const addHandler = () => {
        if (currentInput !== '') {
          props.onAdd(currentInput);
        }
    }

    const deleteHandler = () => {
        setCurrentInput(""); 
    }

    return (
        <View style={styles.itemContainer}>
            <Button onPress={addHandler}
            type="clear" icon={<Ionicons name="checkmark-circle-outline" size={24}
            color={DefaultStyle.primary}/>}/>
            <TextInput placeholder="Add New City Here" style={styles.title} onChangeText={changeTextHandler} value={currentInput}/>
            <Button onPress={deleteHandler}
            type="clear" icon={<Ionicons name="backspace-outline" size={24}
            color={DefaultStyle.primary}/>}/>
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
    alignItems: "center",
    justifyContent: "space-between",
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