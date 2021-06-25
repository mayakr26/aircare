import React, { useState, useEffect } from "react";
import GeneralNavigator from "./navigation/GeneralNavigator";
import MainNavigator from './navigation/MainNavigator';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { CITIESAIR, CITIESTEMP } from './data/dummyData';
import { ToDoContext } from "./data/ToDoContext";
import { getData } from './data/AppStorage';


export default App => {

  const [toDoData, setToDoData] = useState({
    citiesair: CITIESAIR,
    citiestemp: CITIESTEMP
  });

  useEffect(() => {
    getData().then((returnedValue) => {
      setToDoData(JSON.parse(returnedValue))}).catch((e) => {
        console.error(e)
      });
  }, []);

  let [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-LightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-ThinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ToDoContext.Provider value={[toDoData, setToDoData]}>
        <GeneralNavigator />
      </ToDoContext.Provider>
    );
  }
};