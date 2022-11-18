import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/Auth/Login';

export type AuthStackParams = {
  LoginScreen: undefined;
  ForgotScreen: undefined;
  OtpScreen: undefined;
  NewPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

type AuthStackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const AuthStackNavigator = (props: Partial<AuthStackNavigatorProps>) => {
  return (
    <Stack.Navigator {...props} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
