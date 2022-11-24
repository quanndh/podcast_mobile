import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AccountScreen from '../screens/Account/AccountScreen';
import ContentScreen from '../screens/Account/Content';
import EditProfileScreen from '../screens/Account/EditProfile';
import MemberScreen from '../screens/Account/Member';
import ProfileScreen from '../screens/Account/Profile';
import TransactionScreen from '../screens/Account/Transaction';
import WalletScreen from '../screens/Account/Wallet';

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
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
      <Stack.Screen name="MemberScreen" component={MemberScreen} />
      <Stack.Screen name="ContentScreen" component={ContentScreen} />
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
