import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppTabNavigator } from './app.navigator';

export type RootStackParams = {
  Auth: undefined;
  App: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

type RootStackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const RootNavigator = (props: Partial<RootStackNavigatorProps>) => {
  return (
    <Stack.Navigator {...props} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="App" component={AppTabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
