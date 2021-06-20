import React, {useContext} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import InputTile from '../components/inputTile';
import {ToDoContext} from '../data/ToDoContext';
import City from '../model/city'

export default InputScreen = ({navigation}) => {

    const [toDoData, setToDoData] = useContext(ToDoContext);
    const addHandler = name => {
        if(name !== ''){
          let newIdCounter = toDoData.cities.length + 1;
          setToDoData(toDoData => ({
            cities: [...toDoData.cities, new City(newIdCounter+'', name, {summary: [12,15,13,17,13,13,14], 
              month: [[12,15,13,17,13,13,14],
              [13,15,13,17,13,13,14],
              [12,15,13,17,13,13,14],
              [12,15,13,17,13,13,14],
              [12,15,13,17,13,13,14],
              [12,15,13,17,13,13,14],
              [12,15,13,17,13,13,14],
              [12,15,13,17,13,13,14],
              [12,15,13,17,13,13,14],
              [12,15,13,17,13,13,14],
              [12,15,13,17,13,13,14],
              [12,15,13,17,13,13,14]]}, "15.06,14.06,13.06,12.06,11.06,10.06,09.06")]
          }));
        }
    
        navigation.goBack();
      };
    
    return ( 
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{flex: 1, padding: 15, flexDirection: 'row'}}> 
                <InputTile placeholderText={"Add new City"} onAdd={addHandler}/>
            </View>
        </TouchableWithoutFeedback>
    );
}