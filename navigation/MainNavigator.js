import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';
import StartScreen from '../screens/startScreen';

const MainStack = createStackNavigator();

export default MainNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="startScreen" screenOptions={{
                headerTitle: "AirCare",
                headerStyle: {height: 120},
                headerTitleStyle: {fontSize: 32, fontWeight: 'bold', color:'tomato'},      
            }}>
            <MainStack.Screen name="startScreen" component={StartScreen}/>
            </MainStack.Navigator>
        </NavigationContainer>
    );
}