import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InputScreen from '../screens/inputScreen';
import TempGeneral from '../screens/tempGeneral';
import TempCity from '../screens/tempCity';
import AirCity from '../screens/airCity';


const TempStack = createStackNavigator();

export default TemperatureNavigator = () => {
    return (
        <TempStack.Navigator initialRouteName="Temperature" screenOptions={{
            headerStyle: {height: 120},
            headerTitleStyle: {fontFamily: 'Roboto-Bold', fontSize: 32, color:'#0068d3'},      
        }}>
            <TempStack.Screen name="Temperature" component={TempGeneral}/>
            <TempStack.Screen name="AddCity" component={InputScreen} options={{headerTitle: 'Add City'}}/>
            <TempStack.Screen name="TempCity" component={TempCity}/>
        </TempStack.Navigator>
    );
}