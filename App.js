import React, { useState, useEffect } from "react";
import GeneralNavigator from "./navigation/GeneralNavigator";
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
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
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