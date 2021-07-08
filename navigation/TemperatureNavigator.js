import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InputScreen from '../screens/inputScreen';
import TempGeneral from '../screens/tempGeneral';
import TempCity from '../screens/tempCity';
import DefaultStyle from '../constants/Color';
import { useColorScheme } from 'react-native-appearance';
import { getBackgroundColorTheme, getColorTheme } from '../constants/Theme';


const TempStack = createStackNavigator();

export default TemperatureNavigator = () => {
    const colorScheme = useColorScheme();

    return (
        <TempStack.Navigator initialRouteName="Temperature" screenOptions={{
            headerStyle: { height: 80 },
            headerTitleStyle: {fontFamily: DefaultStyle.fontBold, fontSize: DefaultStyle.size, color: getColorTheme(colorScheme === 'light')},      
        }}>
            <TempStack.Screen name="Temperature" component={TempGeneral} options={{headerStyle: {backgroundColor: getBackgroundColorTheme(colorScheme === 'light'), height: 80}}}/>
            <TempStack.Screen name="AddCity" component={InputScreen} options={{headerTitle: 'Add City'}, {headerStyle: {backgroundColor: getBackgroundColorTheme(colorScheme === 'light'), height: 80}}}/>
            <TempStack.Screen name="TempCity" component={TempCity} options={{headerStyle: {backgroundColor: getBackgroundColorTheme(colorScheme === 'light'), height: 80}}}/>
        </TempStack.Navigator>
    );
}