import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TextComponent,
    SafeAreaView,
    FlatList,
    StatusBar,
    Button,
    TouchableOpacity
} from 'react-native';
import Home from '../screens/page1';
import SecondPage from '../screens/page2';

const Stack=createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title:'HEADER',
                    headerTitleAlign:'center',
                    headerShown:true,
                }}
            />
            <Stack.Screen
                name="SecondScreen"
                component={SecondPage}
                
            />    
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Routes;