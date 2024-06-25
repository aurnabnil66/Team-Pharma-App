import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QrCode from './src/app/Screens/QrCode/QrCode';
import QrScan from './src/app/Screens/QrScan/QrScan';
import MedicineDetails from './src/app/Screens/MedicineDetails/MedicineDetails';
import Login from './src/app/Screens/Login/Login';

function App() {
  const Stack = createNativeStackNavigator();
  // Hook for splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 3000); // Adjust the duration as needed (3000 ms = 3 seconds)

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="QrCode"
          component={QrCode}
          options={{
            title: 'TEAM',
            headerStyle: {
              backgroundColor: '#FBFAF3',
            },
            headerTintColor: '#045A6C',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="QrScan"
          component={QrScan}
          options={{
            title: 'Scan QR Code',
            headerStyle: {
              backgroundColor: '#FBFAF3',
            },
            headerTintColor: '#045A6C',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="MedicineDetails"
          component={MedicineDetails}
          options={{
            title: 'Medicine Name',
            headerStyle: {
              backgroundColor: '#FBFAF3',
            },
            headerTintColor: '#424242',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: ' ',
            headerStyle: {
              backgroundColor: '#FBFAF3',
            },
            headerTintColor: '#424242',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
