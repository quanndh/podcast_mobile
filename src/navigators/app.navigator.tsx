import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import React from 'react';
import BottomTabBar from '../components/BottomTabBar';
import BookTab from '../screens/BookTab';

export type AppTabParams = {
  HomeTab: undefined;
  BookTab: undefined;
  PodcastTab: undefined;
  CreatorTab: undefined;
  PersonalTab: undefined;
};

const Tab = createBottomTabNavigator<AppTabParams>();

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="BookTab" component={BookTab} />
      <Tab.Screen name="PodcastTab" component={HomeScreen} />
      <Tab.Screen name="CreatorTab" component={HomeScreen} />
      <Tab.Screen name="PersonalTab" component={HomeScreen} />
    </Tab.Navigator>
  );
};
