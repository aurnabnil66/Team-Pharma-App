import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

function App() {
  // Hook for splash screen
  useEffect(() => {
    SplashScreen.hide();
  }, []);
}

export default App;
