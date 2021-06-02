import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InputScreen from '../screens/inputScreen';
import airGeneral from '../screens/airGeneral';
import AirCity from '../screens/airCity'


const AirStack = createStackNavigator();

export default TemperatureNavigator = () => {
    return (
        <AirStack.Navigator initialRouteName="airGeneral" screenOptions={{
            headerStyle: {height: 120},
            headerTitleStyle: {fontSize: 32, fontWeight: 'bold', color:'#0068d3'},      
        }}>
            <AirStack.Screen name="airGeneral" component={airGeneral}/>
            <AirStack.Screen name="AddCity" component={InputScreen} options={{headerTitle: 'Add City'}}/>
            <AirStack.Screen name="AirCity" component={AirCity}/>
        </AirStack.Navigator>
    );
}