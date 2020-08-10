import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { 
    LoginPages,
} from '~/pages';

const Stack = createStackNavigator();

const ScreenLogin = (
    <>
        <Stack.Screen 
            name="LoginScreen"
            component={LoginPages}
            options={{
                headerShown: false,
            }}
        />
    </>
);

const NavigatorStack = (
        <Stack.Navigator>
            {ScreenLogin}
        </Stack.Navigator>
);

const Route = () => {
    return (
        <NavigationContainer>
            { NavigatorStack }
        </NavigationContainer>
    );
}

export default Route;