import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InputScreen from '../screens/inputScreen';
import airGeneral from '../screens/airGeneral';
import AirCity from '../screens/airCity';
import DefaultStyle from '../constants/Color';
import { useColorScheme } from 'react-native-appearance';
import { getBackgroundColorTheme, getColorTheme } from '../constants/Theme';


const AirStack = createStackNavigator();

export default TemperatureNavigator = () => {
    const colorScheme = useColorScheme();

    return (
        <AirStack.Navigator initialRouteName="airGeneral" screenOptions={{
            headerStyle: {height: 80},
            headerTitleStyle: {fontFamily: DefaultStyle.fontBold, fontSize: DefaultStyle.size, color: getColorTheme(colorScheme === 'light')},      
        }}>
            <AirStack.Screen name="airGeneral" component={airGeneral} options={{headerStyle: {backgroundColor: getBackgroundColorTheme(colorScheme === 'light'), height: 80}}}/>
            <AirStack.Screen name="AddCity" component={InputScreen} options={{headerTitle: 'Add City'}, {headerStyle: {backgroundColor: getBackgroundColorTheme(colorScheme === 'light'), height: 80}}}/>
            <AirStack.Screen name="AirCity" component={AirCity}/>
        </AirStack.Navigator>
    );
}