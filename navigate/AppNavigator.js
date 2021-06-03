import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import ListItems from '../screens/ListItems';
import LoginScreen from '../screens/LoginScreen';

export default function AppNavigator() {
const Stack = createStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator navigationOptions>
            <Stack.Screen component={LoginScreen} options={{ headerShown: false }} name="Login" />
                <Stack.Screen component={ListItems} options={{headerTitleAlign: 'center',headerLeft:false}} name='Lists' />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
