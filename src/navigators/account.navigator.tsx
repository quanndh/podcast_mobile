import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AccountScreen from '../screens/Account/AccountScreen';
import ProfileScreen from '../screens/Account/Profile';

export type AccountStackParams = {
  AccountScreen: undefined;
  ProfileScreen: undefined;
  EditProfileScreen: undefined;
  TransactionScreen: undefined;
  MemberScreen: undefined;
  ContentScreen: undefined;
  WalletScreen: undefined;
  SettingScreen: undefined;
};

const Stack = createNativeStackNavigator<AccountStackParams>();

type AccountStackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const AccountStackNavigator = (props: Partial<AccountStackNavigatorProps>) => {
  return (
    <Stack.Navigator {...props} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
