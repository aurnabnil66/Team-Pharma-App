import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QrCode from './src/app/Screens/QrCode/QrCode';
import QrScan from './src/app/Screens/QrScan/QrScan';

function App() {
  const Stack = createNativeStackNavigator();
  // Hook for splash screen
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QrCode" component={QrCode} />
        <Stack.Screen name="QrScan" component={QrScan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
