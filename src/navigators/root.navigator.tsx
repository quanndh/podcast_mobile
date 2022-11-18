import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppTabNavigator } from './app.navigator';
import AuthStackNavigator from './auth.navigation';

export type RootStackParams = {
  Auth: undefined;
  App: undefined;
  Account: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

type RootStackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const RootNavigator = (props: Partial<RootStackNavigatorProps>) => {
  return (
    <Stack.Navigator {...props} screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="App" component={AppTabNavigator} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'containedModal' }}>
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
