import React, { useContext } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputTile from '../components/inputTile';
import { ToDoContext } from '../data/ToDoContext';
import City from '../model/city';
import { storeData } from '../data/AppStorage';
import { useColorScheme } from 'react-native-appearance';
import { getBackgroundColorTheme, getTextColorTheme, getColorTheme } from '../constants/Theme';


export default InputScreen = ({ navigation }) => {

  const [toDoData, setToDoData] = useContext(ToDoContext);

  const colorScheme = useColorScheme();


  const addHandler = name => {
    if (name !== '') {
      let dataair = [];
      let datatemp = [];
      let dataairaverage = [];
      let datatempaverage = [];
      for (let a = 0; a < 12; a += 1) {
        let innerair = [];
        let innertemp = [];
        for (let i = 0; i < 7; i += 1) {
          let randomair = Math.floor(Math.random() * (170 - 10)) + 10;
          let randomtemp = Math.floor(Math.random() * (20 - 5)) + 5;
          innerair.push(
            randomair
          )
          innertemp.push(
            randomtemp
          )
        }
        dataair.push(innerair);
        datatemp.push(innertemp);
      }

      for (let a = 0; a < 7; a += 1) {
        let sumair = 0;
        let sumtemp = 0;
        for (let i = 0; i < 12; i += 1) {
          sumair += dataair[i][a];
          sumtemp += datatemp[i][a];
        }
        dataairaverage.push(Math.floor(sumair / 12));
        datatempaverage.push(Math.floor(sumtemp / 12));
      }

      let newIdCounterair = toDoData.citiesair.length + 1;
      let newIdCountertemp = toDoData.citiestemp.length + 1;
      let d = {
        citiesair: [...toDoData.citiesair, new City(newIdCounterair + '', name, {
          summary: dataairaverage,
          month: dataair
        }, "15.06,14.06,13.06,12.06,11.06,10.06,09.06")],
        citiestemp: [...toDoData.citiestemp, new City(newIdCountertemp + '', name, {
          summary: datatempaverage,
          month: datatemp
        }, "15.06,14.06,13.06,12.06,11.06,10.06,09.06")]
      }
      setToDoData(data => (d))

      storeData(d);
    }

    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, padding: 15, flexDirection: 'row', backgroundColor: getBackgroundColorTheme(colorScheme === 'light') }}>
        <InputTile placeholderText={"Add new City"} onAdd={addHandler} />
      </View>
    </TouchableWithoutFeedback>
  );
}