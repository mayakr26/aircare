import React, { useState, useEffect } from "react";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { CITIESAIR, CITIESTEMP } from './data/dummyData';
import { CityContext } from "./data/CityContext";
import { getData } from './data/AppStorage';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import MainNavigator from "./navigation/MainNavigator";

export default App => {

  const [cityData, setCityData] = useState({
    citiesair: CITIESAIR,
    citiestemp: CITIESTEMP
  });

  useEffect(() => {
    getData().then((returnedValue) => {
      setCityData(JSON.parse(returnedValue))}).catch((e) => {
        console.log('Storage not set yet')
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
      <AppearanceProvider>
        <CityContext.Provider value={[cityData, setCityData]}>
          <MainNavigator />
        </CityContext.Provider>
      </AppearanceProvider>
    );
  }
};