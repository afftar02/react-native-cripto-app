import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import CryptoInfoScreen from './CryptoInfoScreen';
import MainScreen from './MainScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer theme={DarkTheme}>
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false, statusBarColor: 'black' }} >
                    <Stack.Screen name='Main' component={MainScreen} />
                    <Stack.Screen name='CryptoInfo' component={CryptoInfoScreen} />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
}