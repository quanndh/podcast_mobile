import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootApp from './src/RootApp';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';
import { Storage } from './src/helpers/storage';
import { RecoilRoot } from 'recoil';

const App = () => {
  const init = async () => {
    await Storage.set('isLogin', 'false');
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Host>
          <NavigationContainer>
            <RecoilRoot>
              <RootApp />
            </RecoilRoot>
          </NavigationContainer>
        </Host>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
