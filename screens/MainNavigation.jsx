import React from 'react';
import AddingCryptoScreen from './AddingCryptoScreen';
import CryptoInfoScreen from './CryptoInfoScreen';
import MainScreen from './MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="List" screenOptions={{ headerShown: false }} >
            <Stack.Screen name='List' component={MainScreen} />
            <Stack.Screen name='CryptoInfo' component={CryptoInfoScreen} />
            <Stack.Screen name='AddingCrypto' component={AddingCryptoScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigation;