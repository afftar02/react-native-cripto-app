import React from 'react';
import ChangingCryptoAmountScreen from './ChangingCryptoAmountScreen';
import CryptoInfoScreen from './CryptoInfoScreen';
import MainScreen from './MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="List" screenOptions={{ headerShown: false }} >
            <Stack.Screen name='List' component={MainScreen} />
            <Stack.Screen name='CryptoInfo' component={CryptoInfoScreen} />
            <Stack.Screen name='ChangingCrypto' component={ChangingCryptoAmountScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigation;