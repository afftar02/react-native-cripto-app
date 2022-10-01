import { View, StatusBar } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PortfolioScreen from './PortfolioScreen';
import MainNavigation from './MainNavigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

export const Navigation = () => {
    return (
        <NavigationContainer theme={DarkTheme}>
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <StatusBar barStyle="light-content" backgroundColor="#000000" />
                <Tab.Navigator initialRouteName="Main"
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Main') {
                                iconName = 'home';
                            } else if (route.name === 'Portfolio') {
                                iconName = 'purse';
                            }

                            return <Icon name={iconName} color={color} size={size} />
                        },
                        tabBarActiveTintColor: '#99ccff',
                        tabBarInactiveTintColor: 'gray',
                        headerShown: false,
                    })}>
                    <Tab.Screen name="Main" component={MainNavigation} />
                    <Tab.Screen name="Portfolio" component={PortfolioScreen} />
                </Tab.Navigator>
            </View>
        </NavigationContainer >
    )
}