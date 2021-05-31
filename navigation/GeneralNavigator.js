import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import TemperatureNavigator from './TemperatureNavigator';
import AirNavigator from './AirNavigator';
import { NavigationContainer } from "@react-navigation/native";

const GeneralTab = createBottomTabNavigator();

export default GeneralNavigator = (navigation) => {
    return (
        <NavigationContainer>
        <GeneralTab.Navigator
            initialRouteName="Temperature"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Temperature') {
                        iconName = focused ? 'ios-thermometer' : 'ios-thermometer-outline';
                    } else if (route.name === 'Air Condition') {
                        iconName = focused ? 'ios-cloudy' : 'ios-cloudy-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <GeneralTab.Screen name="Temperature" component={TemperatureNavigator} title="Temperatures"/>
            <GeneralTab.Screen name="Air Condition" component={AirNavigator}/>
        </GeneralTab.Navigator>
        </NavigationContainer>
    );
}