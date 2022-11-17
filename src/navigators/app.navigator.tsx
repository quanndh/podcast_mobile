import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import React from 'react';
import BottomTabBar from '../components/BottomTabBar';
import BookTab from '../screens/BookTab';
import PodcastTab from '../screens/PodcastTab';
import CreatorTab from '../screens/CreatorTab';
import NotificationScreen from '../screens/Notification';
import PersonalTab from '../screens/PersonalTab';

export type AppTabParams = {
  HomeTab: undefined;
  BookTab: undefined;
  PodcastTab: undefined;
  CreatorTab: undefined;
  PersonalTab: undefined;
  NotificationTab: undefined;
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
      <Tab.Screen name="PodcastTab" component={PodcastTab} />
      <Tab.Screen name="CreatorTab" component={CreatorTab} />
      <Tab.Screen name="PersonalTab" component={PersonalTab} />
      <Tab.Screen name="NotificationTab" component={NotificationScreen} />
    </Tab.Navigator>
  );
};
