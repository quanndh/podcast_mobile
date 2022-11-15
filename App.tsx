import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootApp from './src/RootApp';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Host>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <RootApp />
          </NavigationContainer>
        </Host>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
