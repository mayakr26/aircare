import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import TemperatureNavigator from './TemperatureNavigator';

const GeneralTab = createBottomTabNavigator();

export default GeneralNavigator = (navigation) => {
    return (
        <GeneralTab.Navigator
            initialRouteName="tempGeneral"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'tempGeneral') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'airGeneral') {
                        iconName = focused ? 'ios-star' : 'ios-star-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <GeneralTab.Screen name="tempGeneral" component={TemperatureNavigator}/>
            <GeneralTab.Screen name="airGeneral" component={AirNavigator}/>
        </GeneralTab.Navigator>
    );
}