import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import QrCode from './src/app/Screens/QrCode/QrCode';
import QrScan from './src/app/Screens/QrScan/QrScan';
import MedicineDetails from './src/app/Screens/MedicineDetails/MedicineDetails';
import Login from './src/app/Screens/Login/Login';
import SignUp from './src/app/Screens/SignUp/SignUp';
import ForgotPassword from './src/app/Screens/ForgetPassword/ForgotPassword';
import EnterOtp from './src/app/Screens/EnterOtp/EnterOtp';
import ResetPassword from './src/app/Screens/ResetPassword/ResetPassword';
import PasswordChanged from './src/app/Screens/PasswordChanged/PasswordChanged';
import GuestLogin from './src/app/Screens/GuestLogin/GuestLogin';
import MenuIcon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity, View} from 'react-native';
import AddMedicine from './src/app/Screens/AddMedicine/AddMedicine';
import AddManualMedicine from './src/app/Screens/AddManualMedicine/AddManualMedicine';
import MedicineDoses from './src/app/Screens/MedicineDoses/MedicineDoses';
import MedicineDailyDoses from './src/app/Screens/MedicineDailyTaking/MedicineDailyDoses';

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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="QrScan"
          component={QrScan}
          options={{
            headerShown: false,
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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EnterOtp"
          component={EnterOtp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PasswordChanged"
          component={PasswordChanged}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GuestLogin"
          component={GuestLogin}
          options={{
            title: 'Hi Guest',
            headerStyle: {
              backgroundColor: '#FBFAF3',
            },
            headerShown: true,
            headerTintColor: '#424242',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 16,
            },
            headerLeft: () => (
              <TouchableOpacity>
                <MenuIcon name="menu" size={30} color={'#424242'}></MenuIcon>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="AddMedicine"
          component={AddMedicine}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddManualMedicine"
          component={AddManualMedicine}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MedicineDoses"
          component={MedicineDoses}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MedicineDailyDoses"
          component={MedicineDailyDoses}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
