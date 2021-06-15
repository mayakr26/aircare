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
            cities: [...toDoData.cities, new City(newIdCounter+'', name, [1,2,3,4,5,6,7], "15.06,14.06,13.06,12.06,11.06,10.06,09.06")]
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