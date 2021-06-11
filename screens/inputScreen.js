import React from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import InputTile from '../components/inputTile'

export default InputScreen = ({navigation}) => {
    
    const addHandler = (name) => {
        if(name !== ''){
            console.log("Add city: " + name)
            navigation.goBack();
        }
        
    }
    
    return ( 
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{flex: 1, padding: 15, flexDirection: 'row'}}> 
                <InputTile placeholderText={"Add new City"} onAdd={addHandler}/>
            </View>
        </TouchableWithoutFeedback>
    );
}