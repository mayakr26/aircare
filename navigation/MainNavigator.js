import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/startScreen';
import GeneralNavigator from "../navigation/GeneralNavigator";

const MainStack = createStackNavigator();

export default MainNavigator = () => {
    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });

    return (
        <NavigationContainer >
            <MainStack.Navigator initialRouteName="startScreen" screenOptions={{
                headerTitleStyle: { fontSize: 22, fontWeight: 'bold', color: '#0068d3' },
                cardStyleInterpolator: forFade,
            }}>
                <MainStack.Screen name="startScreen" component={StartScreen} options={{ headerShown: false }} />
                <MainStack.Screen name="generalScreen" component={GeneralNavigator} options={{ headerShown: false }} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}