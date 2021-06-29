import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/startScreen';
import GeneralNavigator from "../navigation/GeneralNavigator";


const MainStack = createStackNavigator();

export default MainNavigator = () => {

    return (
        <NavigationContainer >
            <MainStack.Navigator initialRouteName="startScreen" screenOptions={{
                headerStyle: { height: 120 },
                headerTitleStyle: { fontSize: 32, fontWeight: 'bold', color: '#0068d3' },
            }}>
                <MainStack.Screen name="startScreen" component={StartScreen} options={{ headerShown: false }} />
                <MainStack.Screen name="generalScreen" component={GeneralNavigator} options={{ headerShown: false }} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}