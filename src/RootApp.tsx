import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from './constants/colors';
import RootNavigator from './navigators/root.navigator';

const RootApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});

export default RootApp;
