import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../screens/startScreen';
import TempGeneral from "../screens/tempGeneral";

const MainStack = createStackNavigator();

export default MainNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="startScreen" screenOptions={{
                headerTitle: "AirCare",
                headerStyle: {height: 120},
                headerTitleStyle: {fontSize: 32, fontWeight: 'bold', color:'blue'},      
            }}>
            <MainStack.Screen name="startScreen" component={StartScreen}/>
            <MainStack.Screen name="tempGeneral" component={TempGeneral}/>
            </MainStack.Navigator>
        </NavigationContainer>
    );
}