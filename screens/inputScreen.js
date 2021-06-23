import React, {useContext} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import InputTile from '../components/inputTile';
import {ToDoContext} from '../data/ToDoContext';
import City from '../model/city'

export default InputScreen = ({navigation}) => {

    const [toDoData, setToDoData] = useContext(ToDoContext);
    const addHandler = name => {
        if(name !== ''){
          let newIdCounterair = toDoData.citiesair.length + 1;
          let newIdCountertemp = toDoData.citiestemp.length + 1;
          setToDoData(toDoData => ({
            citiesair: [...toDoData.citiesair, new City(newIdCounterair+'', name, {summary: [40,45,50,45,48,43,55], 
              month: [[40,45,50,45,48,43,55],
              [40,45,50,45,48,43,55],
              [40,45,50,45,48,43,55],
              [40,45,50,45,48,43,55],
              [40,45,50,45,48,43,55],
              [40,45,50,45,48,43,55],
              [40,45,50,45,48,43,55],
              [40,45,50,45,48,43,55],
              [40,45,50,45,48,43,55],
              [40,45,50,45,48,43,55],
              [40,45,50,45,48,43,55],
              [40,45,50,45,48,43,55]]}, "15.06,14.06,13.06,12.06,11.06,10.06,09.06")],
            citiestemp: [...toDoData.citiestemp, new City(newIdCountertemp+'', name, {summary: [9.7,10.2,10.5,10.1,10.8,11.4,12.1], 
              month: [[0.7,1.5,1.6,2.7,2.6,2.6,4.1],
              [1.8,2.3,2.4,-1.1,4.7,3,6.5],
              [5.2,6.1,6.4,8.2,6.7,7.6,7.4],
              [9.2,9.5,10.3,9.1,8.8,14,12.9],
              [13.7,14.3,14.7,11.9,16.6,16.3,14.2],
              [17.1,17.3,17.8,15.2,16.4,18.5,18.6],
              [18.9,19.5,20,21.6,20.7,17.7,20.6],
              [18.3,19.1,19.5,21.1,20.5,19.4,22],
              [14.8,14.9,15.2,17.1,13,17,17],
              [9.8,9.8,10.4,9.1,13.4,10.7,11.3],
              [4.7,5,5.6,4.8,4.6,5.4,6.6],
              [1.8,2.6,2.5,1.1,1.4,5.1,4.3]]}, "15.06,14.06,13.06,12.06,11.06,10.06,09.06")]
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