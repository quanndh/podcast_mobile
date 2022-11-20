import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ForgorPasswordScreen from '../screens/Auth/ForgotPassword';
import LoginScreen from '../screens/Auth/Login';
import OtpScreen from '../screens/Auth/Otp';
import ResetPasswordScreen from '../screens/Auth/ResetPassword';

export type AuthStackParams = {
  LoginScreen: undefined;
  ForgotScreen: undefined;
  OtpScreen: undefined;
  ResetPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

type AuthStackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const AuthStackNavigator = (props: Partial<AuthStackNavigatorProps>) => {
  return (
    <Stack.Navigator {...props} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgorPasswordScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
